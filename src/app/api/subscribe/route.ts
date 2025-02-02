import { NextResponse } from "next/server";
import { subscribeUser } from "@/app/actions";

export async function POST(req: Request) {
  try {
    const { endpoint, keys } = await req.json();
    await subscribeUser({ endpoint, keys });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error subscribing user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to subscribe user" },
      { status: 500 }
    );
  }
}
