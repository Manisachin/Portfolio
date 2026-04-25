import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';

const contactItems = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'manikarunanithi9790@gmail.com',
    href: 'mailto:manikarunanithi9790@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91 97906 71880',
    href: 'tel:+919790671880',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/manikandan-k',
    href: 'https://linkedin.com/in/manikandan-k-6b386932a',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/Manisachin',
    href: 'https://github.com/Manisachin',
  },
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fromName: formData.get('from_name')?.toString().trim(),
      fromEmail: formData.get('from_email')?.toString().trim(),
      subject: formData.get('subject')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
    };

    setSending(true);
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try emailing directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-box-main">
          <div className="contact-header-full">
            <div className="section-label">06. Connect</div>
            <h2 className="section-title">Ready to <span className="text-accent">Build</span> Something Amazing?</h2>
            <p className="section-desc">
              Open for opportunities and collaborations. My inbox is always open.
            </p>
          </div>
          
          <div className="contact-grid-row">
            <div className="contact-info-new">
              <div className="contact-methods-grid">
                {contactItems.map((item, i) => (
                  <motion.a 
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-method-card-v2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="method-icon-v2">{item.icon}</div>
                    <div className="method-details-v2">
                      <span className="method-label-v2">{item.label}</span>
                      <span className="method-value-v2">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="contact-form-new" onSubmit={handleSubmit}>
                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="from_name">Full Name</label>
                    <input type="text" id="from_name" name="from_name" required placeholder="John Doe" />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="from_email">Email Address</label>
                    <input type="email" id="from_email" name="from_email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="form-group-new">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" />
                </div>
                <div className="form-group-new">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" required placeholder="Hi, I'd like to talk about..."></textarea>
                </div>
                
                <div className="form-status-row">
                  {sent && (
                    <div className="form-success-new">
                      <FiCheck /> Message sent!
                    </div>
                  )}
                  
                  {error && (
                    <div className="form-error-new">
                      {error}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
                  {sending ? 'Sending...' : (sent ? 'Message Sent!' : <>Send Message <FiSend /></>)}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
