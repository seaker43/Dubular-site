export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { displayName, bio } = await req.json().catch(() => ({}));
  // TODO: Persist to D1. Example (when binding available as globalThis.DB):
  // const stmt = (globalThis as any).DB
  //   .prepare(`CREATE TABLE IF NOT EXISTS profiles(userId TEXT PRIMARY KEY, displayName TEXT, bio TEXT, updatedAt INTEGER);
  //             INSERT INTO profiles(userId, displayName, bio, updatedAt)
  //             VALUES (?1, ?2, ?3, ?4)
  //             ON CONFLICT(userId) DO UPDATE SET displayName=excluded.displayName, bio=excluded.bio, updatedAt=excluded.updatedAt;`);
  // await stmt.bind(userId, displayName ?? "", bio ?? "", Date.now()).run();

  return Response.json({ ok: true, userId, displayName, bio, ts: Date.now() });
}
