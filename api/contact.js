import nodemailer from 'nodemailer';

/**
 * Serverless API handler (Vercel & local Vite dev server) for sending contact emails via SMTP.
 * Securely uses server-side environment variables without exposing credentials to the client.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  // Read SMTP settings from environment variables
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || 'satyampandey.sp18@gmail.com';

  if (!host || !user || !pass) {
    console.error('SMTP configuration missing: SMTP_HOST, SMTP_USER, or SMTP_PASSWORD is not set.');
    return res.status(500).json({
      success: false,
      message: 'SMTP credentials are not configured on the server. Please check your environment variables.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #4f46e5; padding: 20px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px;">New Message from Portfolio</h2>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #4f46e5;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('SMTP Send Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
}
