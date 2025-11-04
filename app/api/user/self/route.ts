// @ts-ignore

export const runtime="nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  const { env } = await import("cloudflare:env");
<<<<<<< Updated upstream
  return NextResponse.json({ id: 1, handle: "demo-user", name: "Demo User" });
=======
return NextResponse.json({ id: 1, handle: "demo-user", name: "Demo User" });
>>>>>>> Stashed changes
}
