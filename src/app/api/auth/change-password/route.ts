import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import connectMongo from "../../../lib/mongodb"; // Your DB connection utility
import User from "@/app/models/User";

export async function POST(request: Request) {
  const { userId, oldPassword, newPassword } = await request.json();

  if (!userId || !oldPassword || !newPassword) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await connectMongo();

  const user = await User.findOne({ _id: userId });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Check if old password matches
  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isMatch) {
    return NextResponse.json(
      { error: "Old password is incorrect" },
      { status: 400 },
    );
  }

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update user password in the database
  await User.findByIdAndUpdate(userId, {
    password: hashedPassword,
  });

  return NextResponse.json(null, { status: 200 });
}
