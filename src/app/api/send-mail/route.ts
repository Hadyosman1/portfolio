import { EMAIL_PASS, EMAIL_USER, RECEIVER_EMAIL } from "@/constants";
import { contactFormSchema } from "@/lib/validation/contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsedData = contactFormSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: "Invalid input data", details: parsedData.error.format() },
        { status: 400 },
      );
    }

    const { name, email, message } = parsedData.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Send notification email to admin
    await transporter.sendMail({
      from: EMAIL_USER,
      to: RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `From: ${email}\n\n${message}`,
      replyTo: email,
    });

    // Send auto-reply to the user
    try {
      await transporter.sendMail({
        from: RECEIVER_EMAIL,
        to: email,
        subject: "Thank you for contacting me!",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <a href="https://portfolio-hady-osman.vercel.app" target="_blank">
              <img src="https://portfolio-hady-osman.vercel.app/android-chrome-512x512.png" alt="Hady Osman Logo" style="max-width: 100px; height: auto;" />
            </a>
          </div>
          <h1 style="font-size: 24px; color: #2c3e50;">Dear ${name},</h1>
          <p style="font-size: 16px; line-height: 1.5; margin: 20px 0;">
            Thank you for reaching out! I've received your message and I appreciate you taking the time to contact me.
          </p>
          <p style="font-size: 16px; line-height: 1.5; margin: 20px 0;">
            I will review your message carefully and get back to you as soon as possible.
          </p>
          <h3 style="font-size: 18px; color: #2c3e50; margin-top: 30px;">Best regards,</h3>
          <p style="font-size: 16px; font-weight: bold; color: #2c3e50;">Hady Osman</p>
        </div>
      `,
        replyTo: RECEIVER_EMAIL,
      });
    } catch (error) {
      console.error("Error while sending feedback email to the user", error);
    }

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
