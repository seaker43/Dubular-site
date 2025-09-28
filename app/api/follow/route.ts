export const runtime = "edge";
import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

function db() {
  const d1 = (getRequestContext().env as any).DB;
  if (!d1) throw new Error("DB binding not found");
  return d1;
}

function ok(body: any, status: number = 200) {
  return NextResponse.json(body, { status });
}
function bad(msg: string, status: number = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

// GET ?user_id=… OR ?creator_id=…
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const user_id = url.searchParams.get("user_id");
    const creator_id = url.searchParams.get("creator_id");

    if (user_id) {
      if (!Number.isFinite(Number(user_id))) return bad("user_id must be a number");
      const q = await db()
        .prepare("SELECT creator_id FROM follows WHERE user_id = ? ORDER BY creator_id")
        .bind(user_id)
        .all();
      return ok({ ok: true, user_id: Number(user_id), creators: q.results ?? [] });
    }

    if (creator_id) {
      if (!Number.isFinite(Number(creator_id))) return bad("creator_id must be a number");
      const q = await db()
        .prepare("SELECT user_id FROM follows WHERE creator_id = ? ORDER BY user_id")
        .bind(creator_id)
        .all();
      return ok({ ok: true, creator_id: Number(creator_id), followers: q.results ?? [] });
    }

    return bad("missing query: pass ?user_id=… or ?creator_id=…");
  } catch (err: any) {
    return bad(err.message ?? "GET failed", 500);
  }
}

// POST { follower_id, creator_id }
export async function POST(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    const user_id = follower_id; // alias
    if (typeof user_id !== "number" || typeof creator_id !== "number") {
      return bad("user_id and creator_id must be numbers");
    }
    await db()
      .prepare("INSERT OR IGNORE INTO follows (user_id, creator_id) VALUES (?, ?)")
      .bind(user_id, creator_id)
      .run();
    return ok({ ok: true, status: "following", user_id, creator_id });
  } catch (err: any) {
    return bad(err.message ?? "POST failed", 500);
  }
}

// DELETE { follower_id, creator_id }
export async function DELETE(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    const user_id = follower_id; // alias
    if (typeof user_id !== "number" || typeof creator_id !== "number") {
      return bad("user_id and creator_id must be numbers");
    }
    const r = await db()
      .prepare("DELETE FROM follows WHERE user_id = ? AND creator_id = ?")
      .bind(user_id, creator_id)
      .run();
    return ok({ ok: true, status: r.meta.changes ? "unfollowed" : "noop", user_id, creator_id });
  } catch (err: any) {
    return bad(err.message ?? "DELETE failed", 500);
  }
}
