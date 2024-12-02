import { generateRandomPassword } from "@/app/lib/generatePassword";
import connectMongo from "../../lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import validator from "validator";
import nodemailer from "nodemailer";

export async function GET() {
  await connectMongo();

  const users = await User.find({});

  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: Request) {
  await connectMongo();

  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const image = formData.get("image") as File | null;
  const designation = formData.get("designation") as string;

  if (!name || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!validator.isEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email format." },
      { status: 400 },
    );
  }

  const user = await User.findOne({ email: email });

  if (user) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 422 },
    );
  }

  const salt = await bcrypt.genSalt(10);
  const password = generateRandomPassword();

  const newUser = new User({
    name,
    email,
    image,
    designation,
    password: await bcrypt.hash(password, salt),
  });

  await newUser.save();

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
    from: `"${process.env.APP_NAME}" <${process.env.SUPPORT_EMAIL}>`,
    to: email,
    subject: `Welcome to ${process.env.APP_NAME} Platform`,
    html: `
      <h3>Login Credentials</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `,
  };

  // Send email
  await transporter.sendMail(mailOptions);

  return NextResponse.json({ user: newUser });
}
