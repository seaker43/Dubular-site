// @ts-ignore

export const runtime="nodejs";
import { NextResponse } from "next/server";
import { db, one } from "@/lib/db";
export async function GET(req: Request) {
  const { env } = await import("cloudflare:env");
  const url = new URL(req.url);
  const creatorId = url.searchParams.get("creatorId");
  if (!creatorId)
    return NextResponse.json({ error: "creatorId required" }, { status: 400 });
  const row = await one<{ c: number }>(
    db()
      .prepare("SELECT COUNT(*) AS c FROM follows WHERE creator_id=?1")
      .bind(creatorId),
  );
  return NextResponse.json({ count: row?.c ?? 0 });
}
