import { generateRandomPassword } from "@/app/lib/generatePassword";
import connectMongo from "../../lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET() {
  await connectMongo();

  const users = await User.find({});

  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: Request) {
  await connectMongo();

  const body = await request.json();

  const { name, email, designation, image } = body;

  const user = await User.findOne({ email: email });

  if (user) {
    return NextResponse.json(
      { errMsg: "User already exists" },
      { status: 422 },
    );
  }

  const salt = await bcrypt.genSalt(10);

  const newUser = new User({
    name,
    email,
    image,
    designation,
    password: await bcrypt.hash("123456", salt),
    // password: await bcrypt.hash(generateRandomPassword(), salt),
  });

  await newUser.save();

  return NextResponse.json({ user: newUser });
}
