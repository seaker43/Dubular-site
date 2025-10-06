export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getDB } from "@/lib/db";

const ensureTableSQL = `
CREATE TABLE IF NOT EXISTS profiles (
  user_id TEXT PRIMARY KEY,
  display_name TEXT,
  bio TEXT,
  updated_at INTEGER
)`;

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = getDB();
  await db.prepare(ensureTableSQL).run();
  const row = await db.prepare("SELECT user_id, display_name, bio, updated_at FROM profiles WHERE user_id = ?1").bind(userId).first();
  return NextResponse.json(row ?? { user_id: userId, display_name: null, bio: null, updated_at: null });
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { displayName, bio } = await req.json().catch(() => ({}));
  const db = getDB();
  await db.prepare(ensureTableSQL).run();
  const now = Date.now();
  await db.prepare(
    "INSERT INTO profiles (user_id, display_name, bio, updated_at) VALUES (?1, ?2, ?3, ?4) " +
    "ON CONFLICT(user_id) DO UPDATE SET display_name=excluded.display_name, bio=excluded.bio, updated_at=excluded.updated_at"
  ).bind(userId, displayName ?? null, bio ?? null, now).run();
  const row = await db.prepare("SELECT user_id, display_name, bio, updated_at FROM profiles WHERE user_id = ?1").bind(userId).first();
  return NextResponse.json(row);
}
