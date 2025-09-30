import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import { Resend } from "resend";
import { body, validationResult } from "express-validator";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post(
  "/contact",
  [
    // Validation rules
    body("name").trim().notEmpty().withMessage("Name is required").escape(),
    body("email")
      .isEmail()
      .withMessage("Invalid email address")
      .normalizeEmail(),
    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
      .escape(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "abdieljflores.dev@gmail.com",
        reply_to: email,
        subject: `New message from ${name}`,
        html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;
