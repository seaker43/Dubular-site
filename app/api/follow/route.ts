export const runtime = "edge";
import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

// tiny helpers
const ok = (b: any, init: number | ResponseInit = 200) => NextResponse.json(b, typeof init === "number" ? { status: init } : init);
const bad = (msg: string, status = 400) => ok({ error: msg }, status);

function db() {
  // Binding name must match wrangler.toml [[d1_databases]].binding (we use "D1")
  const d1 = (getRequestContext().env as any).DB as D1Database;
  if (!d1) throw new Error("D1 binding not found (check wrangler.toml [[d1_databases]])");
  return d1;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const creator = url.searchParams.get("creator_id");
    const follower = url.searchParams.get("follower_id");

    if (creator) {
      const creator_id = Number(creator);
      if (!Number.isFinite(creator_id)) return bad("creator_id must be a number");
      const q = await db().prepare("SELECT follower_id FROM follows WHERE creator_id = ? ORDER BY follower_id").bind(creator_id).all();
      return ok({ ok: true, creator_id, followers: (q.results ?? []).map((r: any) => r.follower_id) });
    }

    if (follower) {
      const follower_id = Number(follower);
      if (!Number.isFinite(follower_id)) return bad("follower_id must be a number");
      const q = await db().prepare("SELECT creator_id FROM follows WHERE follower_id = ? ORDER BY creator_id").bind(follower_id).all();
      return ok({ ok: true, follower_id, creators: (q.results ?? []).map((r: any) => r.creator_id) });
    }

    return bad("missing query: pass ?creator_id=… or ?follower_id=…");
  } catch (err: any) {
    return bad(err?.message ?? "GET failed", 500);
  }
}

export async function POST(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number") return bad("follower_id and creator_id must be numbers");
    await db().prepare("INSERT OR IGNORE INTO follows (follower_id, creator_id) VALUES (?, ?)").bind(follower_id, creator_id).run();
    return ok({ ok: true, status: "following", follower_id, creator_id });
  } catch (err: any) {
    return bad(err?.message ?? "POST failed", 500);
  }
}

export async function DELETE(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number") return bad("follower_id and creator_id must be numbers");
    const r = await db().prepare("DELETE FROM follows WHERE follower_id = ? AND creator_id = ?").bind(follower_id, creator_id).run();
    return ok({ ok: true, status: r.meta.changes ? "unfollowed" : "noop", follower_id, creator_id });
  } catch (err: any) {
    return bad(err?.message ?? "DELETE failed", 500);
  }
}
