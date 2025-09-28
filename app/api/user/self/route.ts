export const runtime = "edge";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ id: 1, handle: "demo-user", name: "Demo User" });
}
