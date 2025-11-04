// @ts-ignore

export const runtime="nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  const { env } = await import("cloudflare:env");

return NextResponse.json({ id: 1, handle: "demo-user", name: "Demo User" });
}
