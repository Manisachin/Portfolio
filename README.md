# Manikandan K - Portfolio

Modern developer portfolio built with React, Vite, and Framer Motion. Features a serverless contact form powered by Resend and Vercel.

## 🚀 Deployment to Vercel

1. **Push your code** to GitHub.
2. **Import to Vercel**: Connect your GitHub repository to Vercel.
3. **Configure Environment Variables**:
   In the Vercel project settings, add the following variables:
   - `RESEND_API_KEY`: Get this from your [Resend Dashboard](https://resend.com).
   - `RESEND_FROM_EMAIL`: The email address you've verified in Resend (e.g., `Portfolio Contact <onboarding@resend.dev>`).
   - `CONTACT_TO_EMAIL`: Your personal email where you want to receive contact form submissions.

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root with your Resend keys.
3. To test the contact form locally, use the Vercel CLI:
   ```bash
   npm install -g vercel
   vercel dev
   ```
   *Note: Using `npm run dev` will start the frontend but not the `/api` backend.*

## 📈 SEO

- Optimized with JSON-LD structured data.
- Open Graph and Twitter cards configured for social sharing.
- Fast performance with Vite and optimized assets.
