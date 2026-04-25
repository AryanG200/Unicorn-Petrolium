import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Add CORS headers for flexibility, though usually not needed for same-domain
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName,
    companyName,
    email,
    mobileNumber,
    countryName,
    gradeQuality,
    subject,
    message,
    formType
  } = req.body || {};

  if (!fullName || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  try {
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL
    } = process.env;

    // If SMTP settings are missing, we can't send email but we can log for debugging
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
      console.warn("⚠️ SMTP settings are missing in Vercel Environment Variables.");
      return res.status(500).json({ 
        success: false, 
        error: "Server configuration error: SMTP settings missing." 
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const mailOptions = {
      from: `"Unicorn Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `${formType === "contact" ? "Contact" : "Quote"} request from ${fullName}`,
      text: `
New ${formType === "contact" ? "Contact" : "Quote"} Request from Unicorn Petroleum Website

Contact Details:
- Name: ${fullName}
- Company: ${companyName || "Not provided"}
- Email: ${email}
- Mobile: ${mobileNumber || "Not provided"}
- Country: ${countryName || "Not provided"}
- Grade/Quality: ${gradeQuality || "Not specified"}
- Subject: ${subject || "Not provided"}

Message:
${message}

---
This email was sent from the Unicorn Petroleum website contact form via Vercel Serverless.
Timestamp: ${new Date().toLocaleString()}
      `.trim()
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Check SMTP settings and try again."
    });
  }
}
