// lib/db.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export async function connectToDatabase() {
  if (!MONGO_URI)
    throw new Error("MONGO_URI is not defined in environment variables");

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
  }
}
