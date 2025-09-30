import { NextResponse } from "next/server";

export const runtime = "edge";

async function resolveId(handle: string, db: D1Database): Promise<number|null> {
  const row = await db.prepare("SELECT id FROM creators WHERE handle=?").bind(handle).first() as any;
  return row?.id ?? null;
}

export async function POST(req: Request, ctx: { env: { DB: D1Database } }) {
  try {
    const db = ctx.env.DB;
    const body = await req.json();
    const followerHandle = body?.follower_handle?.trim();
    const followingHandle = body?.following_handle?.trim();
    const action = body?.action?.toLowerCase();

    if (!followerHandle || !followingHandle || !action) {
      return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
    }

    const [followerId, followingId] = await Promise.all([
      resolveId(followerHandle, db),
      resolveId(followingHandle, db),
    ]);
    if (!followerId || !followingId) {
      return NextResponse.json({ ok: false, error: "unknown handle(s)" }, { status: 400 });
    }
    if (followerId === followingId) {
      return NextResponse.json({ ok: false, error: "cannot follow self" }, { status: 400 });
    }

    if (action === "follow") {
      const res = await db.prepare(
        "INSERT OR IGNORE INTO follows (follower_id, following_id) VALUES (?,?)"
      ).bind(followerId, followingId).run();
      return NextResponse.json({
        ok: true,
        action: (res as any)?.meta?.changes > 0 ? "followed" : "already_following",
      });
    }

    if (action === "unfollow") {
      const res = await db.prepare(
        "DELETE FROM follows WHERE follower_id=? AND following_id=?"
      ).bind(followerId, followingId).run();
      return NextResponse.json({
        ok: true,
        action: (res as any)?.meta?.changes > 0 ? "unfollowed" : "not_following",
      });
    }

    return NextResponse.json({ ok: false, error: "invalid action" }, { status: 400 });
  } catch (e: any) {
    console.error("API /api/follow error:", e);
    return NextResponse.json({ ok: false, error: e?.message ?? String(e) }, { status: 500 });
  }
}
