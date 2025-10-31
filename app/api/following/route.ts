// @ts-ignore

export const runtime="nodejs";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db, one } from "@/lib/db";
export async function GET() {
  const { env } = await import("cloudflare:env");
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const row = await one<{ c: number }>(
    db()
      .prepare("SELECT COUNT(*) AS c FROM follows WHERE follower_id=?1")
      .bind(userId),
  );
  return NextResponse.json({ count: row?.c ?? 0 });
}
