import { NextResponse } from "next/server";
import { unsubscribeUser } from "@/app/actions";

export async function POST(req: Request) {
  try {
    const { endpoint } = await req.json();
    await unsubscribeUser(endpoint);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error unsubscribing user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to unsubscribe user" },
      { status: 500 }
    );
  }
}
