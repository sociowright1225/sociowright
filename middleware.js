import { NextResponse } from "next/server";
import { jwtVerify } from "jose"; // 'jsonwebtoken' ki jagah 'jose' use karein

export async function middleware(request) {
  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Secret key ko Uint8Array mein convert karna padta hai jose ke liye
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    
    // Token verify karein. Agar invalid hua to catch block chalega
    await jwtVerify(token, secret);
    
    return NextResponse.next();
  } catch (error) {
    // Agar token fake ya expire hai, to login par bhej do
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};