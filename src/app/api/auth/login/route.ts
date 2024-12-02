import connectMongo from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectMongo();

  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await User.findOne({ email: email });

  if (!user) {
    return NextResponse.json(
      { error: "Incorrect email or password", success: false },
      { status: 422 },
    );
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return NextResponse.json(
      { error: "Incorrect email or password", success: false },
      { status: 422 },
    );
  }

  const data = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(data, process.env.JWT_SECRET);

  return NextResponse.json({ token });
}
