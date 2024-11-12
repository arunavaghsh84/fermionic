import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Define schema for validation using zod
const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be 10 digits" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
  recaptchaToken: z.string(),
});

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    },
  );

  const data = await response.json();

  return data.success;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, address, message, recaptchaToken } =
      ContactSchema.parse(data);

    const isHuman = await verifyRecaptcha(recaptchaToken);

    if (!isHuman) {
      return NextResponse.json(
        { errors: { recaptcha: "Failed reCAPTCHA verification" } },
        { status: 400 },
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong><br> ${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      const errors = error.errors.reduce(
        (acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        },
        {} as Record<string, string>,
      );

      return NextResponse.json({ errors }, { status: 400 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
