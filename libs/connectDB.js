import React from "react";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useUrlParser: true });
        console.log("Successfully connected to MONGODB :)");
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error while trying to connect to MONGODB :(" });
    }
}