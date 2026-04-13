import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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

  try {
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
      return res.status(500).json({
        success: false,
        error:
          "Email server is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL in the .env file."
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
      error: "Failed to send email from server. Check SMTP settings and try again."
    });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Contact form server running on http://localhost:${PORT}`);
});

