import connectDB from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const created = await Portfolio.create(body);
  return NextResponse.json(created, { status: 201 });
}