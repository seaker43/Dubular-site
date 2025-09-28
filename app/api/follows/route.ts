export const runtime = "edge";
import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

const ok = (b: any, init: number | ResponseInit = 200) =>
  NextResponse.json(b, typeof init === "number" ? { status: init } : init);
const bad = (msg: string, status = 400) =>
  NextResponse.json({ ok: false, error: msg }, { status });

function db() {
  const d1 = (getRequestContext().env as any).DB as D1Database;
  if (!d1) throw new Error("D1 binding not found (check wrangler.toml [[d1_databases]])");
  return d1;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const creator = url.searchParams.get("creator_id");
    const follower = url.searchParams.get("follower_id");
    const userId = url.searchParams.get("user_id");
    const limit = Math.min(Number(url.searchParams.get("limit") ?? 20), 50);
    const cursor = url.searchParams.get("cursor");

    if (creator) {
      const id = Number(creator);
      if (!Number.isFinite(id)) return bad("creator_id must be a number");
      const q = await db()
        .prepare("SELECT follower_id FROM follows WHERE creator_id = ? ORDER BY follower_id")
        .bind(id)
        .all();
      return ok({ ok: true, creator_id: id, followers: (q.results ?? []).map((r: any) => r.follower_id) });
    }

    if (follower) {
      const id = Number(follower);
      if (!Number.isFinite(id)) return bad("follower_id must be a number");
      const q = await db()
        .prepare("SELECT creator_id FROM follows WHERE user_id = ?? ORDER BY creator_id")
        .bind(id)
        .all();
      return ok({ ok: true, follower_id: id, creators: (q.results ?? []).map((r: any) => r.creator_id) });
    }

    if (userId) {
      const id = Number(userId);
      if (!Number.isFinite(id)) return bad("user_id must be a number");

      const sql = `
        SELECT c.id, c.handle, c.display_name, c.thumbnail_url,
               (SELECT COUNT(*) FROM follows f2 WHERE f2.creator_id = c.id) AS followers
        FROM creators c
        WHERE EXISTS (
          SELECT 1 FROM follows f WHERE f.user_id = ?? AND f.creator_id = c.id
        )
        ${cursor ? "AND c.id > ?" : ""}
        ORDER BY followers DESC, c.id ASC
        LIMIT ?`;
      const stmt = cursor
        ? db().prepare(sql).bind(id, Number(cursor), limit)
        : db().prepare(sql).bind(id, limit);

      const q = await stmt.all();
      const rows = (q.results ?? []) as any[];
      const next_cursor = rows.length === limit ? rows[rows.length - 1].id : null;

      return ok({ ok: true, user_id: id, creators: rows, next_cursor });
    }

    return bad("missing query: pass ?creator_id=… or ?follower_id=… or ?user_id=…");
  } catch (err: any) {
    return bad(err?.message ?? "GET failed", 500);
  }
}

export async function POST(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number")
      return bad("follower_id and creator_id must be numbers");

    const r = await db()
      .prepare("INSERT OR IGNORE INTO follows (user_id, creator_id) VALUES (?, ?)")
      .bind(follower_id, creator_id)
      .run();

    return ok({ ok: true, status: "following", follower_id, creator_id, inserted: r.meta.changes ?? 0 });
  } catch (err: any) {
    return bad(err?.message ?? "POST failed", 500);
  }
}

export async function DELETE(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number")
      return bad("follower_id and creator_id must be numbers");

    const r = await db()
      .prepare("DELETE FROM follows WHERE user_id = ?? AND creator_id = ?")
      .bind(follower_id, creator_id)
      .run();

    return ok({ ok: true, status: r.meta.changes ? "unfollowed" : "noop", follower_id, creator_id });
  } catch (err: any) {
    return bad(err?.message ?? "DELETE failed", 500);
  }
}
