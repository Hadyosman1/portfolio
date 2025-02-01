import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { EMAIL_PASS, EMAIL_USER, RECEIVER_EMAIL } from "@/constants";
import { contactFormSchema } from "@/lib/validation/contact";

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

    await transporter.sendMail({
      from: EMAIL_USER,
      to: RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `From: ${email}\n\n${message}`,
      replyTo: email,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
