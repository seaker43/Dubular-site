export const runtime = "edge";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { creatorId } = await req.json();
  if (!creatorId)
    return NextResponse.json({ error: "creatorId required" }, { status: 400 });
  await db()
    .prepare(
      "INSERT OR IGNORE INTO follows (follower_id,creator_id,created_at) VALUES (?1,?2,datetime('now'))",
    )
    .bind(userId, creatorId)
    .run();
  return NextResponse.json({ ok: true });
}
export async function DELETE(req: Request) {
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { creatorId } = await req.json();
  if (!creatorId)
    return NextResponse.json({ error: "creatorId required" }, { status: 400 });
  await db()
    .prepare("DELETE FROM follows WHERE follower_id=?1 AND creator_id=?2")
    .bind(userId, creatorId)
    .run();
  return NextResponse.json({ ok: true });
}
