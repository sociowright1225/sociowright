import connectDB from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

/* GET SINGLE */
export async function GET(req, { params }) {
  await connectDB();
  const data = await Portfolio.findById(params.id);
  return NextResponse.json(data);
}

/* UPDATE */
export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  const updated = await Portfolio.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );
  return NextResponse.json(updated);
}

/* DELETE */
export async function DELETE(req, { params }) {
  await connectDB();
  await Portfolio.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
