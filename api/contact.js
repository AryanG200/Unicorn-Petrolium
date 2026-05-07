import nodemailer from "nodemailer";

// Mapping of subjects to different department emails
const SUBJECT_RECIPIENTS = {
  "General inquiry": "manan@unicornpetro.co.in",
  "Become our supplier": "purchase@unicornpetro.co.in",
  "Get a quote (for domestic)": "marketing2unicornpetro.co.in", // Update this email later
  "Get a quote (for exports)": "snaini@unicornpetro.co.in",  // Update this email later
  "Regulatory, Technical & Quality": "lab@unicornpetro.co.in", // Update this email later
  "Feedback": "info@unicornpetro.co.in" // Update this email later
};

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
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
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

    // Determine target recipient based on subject, fallback to CONTACT_TO_EMAIL env var or info@ default
    const recipientEmail = SUBJECT_RECIPIENTS[subject] || CONTACT_TO_EMAIL || "info@unicornpetro.co.in";

    const mailOptions = {
      from: `"Unicorn Petroleum" <${SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New ${formType === "contact" ? "Contact" : "Quote"} Request: ${subject || "General Inquiry"} - from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w-4xl: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaec; border-radius: 8px; background-color: #fcfcfc;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #E99322; margin: 0;">Unicorn Petroleum Industries</h2>
            <p style="color: #555; font-size: 14px; margin-top: 5px;">New ${formType === "contact" ? "Contact" : "Quote"} Request Received</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #eeeeee;">
            <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #E99322; padding-bottom: 8px;">Contact Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; width: 150px; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Company:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${companyName || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #222;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Mobile:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${mobileNumber || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Country:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${countryName || "Not provided"}</td>
              </tr>
              ${formType !== "contact" ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Grade/Quality:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${gradeQuality || "Not specified"}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 8px 0; color: #222;">${subject || "Not provided"}</td>
              </tr>
            </table>

            <h3 style="color: #333; margin-top: 25px; border-bottom: 2px solid #E99322; padding-bottom: 8px;">Message</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; color: #333; white-space: pre-wrap; line-height: 1.5;">${message}</div>
          </div>
          
          <div style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
            <p>This email was automatically generated from the Unicorn Petroleum website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
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
This email was sent from the Unicorn Petroleum website contact form.
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
