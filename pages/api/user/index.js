import connectDB from "@/libs/connectDB";
import User from "../../../models/dbschema";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email } = await request.json();
    await connectMongoDB();
    await User.create({ name, email });
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
}