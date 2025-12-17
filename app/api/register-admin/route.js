import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/User'; // Ensure ye path sahi ho aapke model ke hisaab se
import bcrypt from 'bcryptjs';

// DB Connection helper
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export async function POST(request) {
  try {
    // 1. Postman se data receive karna
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password required' }, { status: 400 });
    }

    await connectDB();

    // 2. Check karna ki user pehle se to nahi hai
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // 3. Password ko Encrypt (Hash) karna
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Database mein save karna
    await User.create({
      username,
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'Admin created successfully!' }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}