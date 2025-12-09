export default function handler(req, res) {
  require('dotenv').config();   // <-- Loads .env from project root

  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASSWORD,
    },
  });

  const mailData = {
    from: process.env.SENDER,
    to: process.env.TO,
    subject: "Message From Portfolio Website",
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone: ${req.body.phone}</p>
      <p>Message: ${req.body.message}</p>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.error("❌ Contact API error:", err);
      return res.status(500).json({ error: "Email failed to send" });
    }
    console.log("✅ Email sent:", info);
    res.status(200).json({ message: "Email sent successfully" });
  });
}
