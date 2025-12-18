import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import mongoose from "mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";

// 1. MongoDB Connection Helper (Optimized for Serverless)
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};

// 2. CORS Headers Helper
const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.FRONTEND_URL || "https://sociowright.vercel.app",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

// 3. Preflight Request (Browser security check)
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// 4. Main Login Logic
export async function POST(request) {
  try {
    await connectDB();
    const { username, password } = await request.json();

    // User find karein
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid username or password" }, 
        { status: 401, headers: corsHeaders }
      );
    }

    // Password compare karein
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid username or password" }, 
        { status: 401, headers: corsHeaders }
      );
    }

    // Token Generate
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Cookie Configuration
    const isProd = process.env.NODE_ENV === "production";
    const cookie = serialize("auth_token", token, {
      httpOnly: true,
      secure: isProd, // Production mein HTTPS hona zaroori hai
      sameSite: isProd ? "none" : "lax", // Cross-domain ke liye 'none' + secure:true
      maxAge: 86400, // 1 day
      path: "/",
    });

    const response = NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200, headers: corsHeaders }
    );

    // Set-Cookie header add karein
    response.headers.append("Set-Cookie", cookie);
    
    return response;

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" }, 
      { status: 500, headers: corsHeaders }
    );
  }
}