import { Resend } from 'resend';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char] || char;
  });

const validatePayload = ({ fromName, fromEmail, subject, message }) => {
  if (!fromName || !fromEmail || !subject || !message) {
    return 'All fields are required.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(fromEmail)) {
    return 'Please enter a valid email address.';
  }

  return null;
};

export async function OPTIONS() {
  return json({}, 204);
}

export async function POST(request) {
  const requiredEnv = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'CONTACT_TO_EMAIL'];
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length) {
    return json(
      { error: `Missing environment variables: ${missingEnv.join(', ')}` },
      500
    );
  }

  try {
    const payload = await request.json();
    const validationError = validatePayload(payload);

    if (validationError) {
      return json({ error: validationError }, 400);
    }

    const { fromName, fromEmail, subject, message } = payload;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipients = [process.env.CONTACT_TO_EMAIL];

    if (process.env.CONTACT_TO_EMAIL_2) {
      recipients.push(process.env.CONTACT_TO_EMAIL_2);
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: recipients,
      replyTo: fromEmail,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${fromName}`,
        `Email: ${fromEmail}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New Portfolio Contact Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(fromName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(fromEmail)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return json({ error: error.message || 'Failed to send email.' }, 500);
    }

    return json({ ok: true });
  } catch (error) {
    return json({ error: error.message || 'Failed to send email.' }, 500);
  }
}
