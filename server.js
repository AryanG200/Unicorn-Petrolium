import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mapping of subjects to different department emails
const SUBJECT_RECIPIENTS = {
  "General inquiry": "manan@unicornpetro.co.in",
  "Become our supplier": "purchase@unicornpetro.co.in",
  "Get a quote (for domestic)": "marketing2unicornpetro.co.in", // Update this email later
  "Get a quote (for exports)": "snaini@unicornpetro.co.in",  // Update this email later
  "Regulatory, Technical & Quality": "lab@unicornpetro.co.in", // Update this email later
  "Feedback": "info@unicornpetro.co.in" // Update this email later
};

app.post("/api/contact", async (req, res) => {
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

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.warn("⚠️ GMAIL_USER or GMAIL_APP_PASSWORD is missing in .env.");
    console.log("--- Contact Form Submission (Console Only) ---");
    console.log(`Type: ${formType}`);
    console.log(`Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("-----------------------------------------------");

    return res.json({
      success: true,
      message: "Message received (Development Mode: logged to console)"
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

    // Determine target recipient based on subject
    const recipient = SUBJECT_RECIPIENTS[subject] || gmailUser; // Fallback to your own Gmail if not found

    const mailOptions = {
      to: recipient,
      from: `"Unicorn Petroleum Website" <${gmailUser}>`,
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
This email was sent from the Unicorn Petroleum website.
Timestamp: ${new Date().toLocaleString()}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true });
  } catch (err) {
    console.error("Error sending email via Nodemailer:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Ensure the Gmail App Password is correct."
    });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Contact form server running on http://localhost:${PORT}`);
});

