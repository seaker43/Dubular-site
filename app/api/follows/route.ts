export const runtime = "edge";
import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

const ok = (b: any, init: number | ResponseInit = 200) =>
  NextResponse.json(b, typeof init === "number" ? { status: init } : init);
const bad = (msg: string, status = 400) =>
  new Response(JSON.stringify({ ok: false, error: msg }), {
    status,
    headers: { "content-type": "application/json" },
  });

function db() {
  const d1 = (getRequestContext().env as any).DB as D1Database;
  if (!d1) throw new Error("D1 binding not found (check wrangler.toml [[d1_databases]])");
  return d1;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const creator = url.searchParams.get("creator_id");
    const follower = url.searchParams.get("follower_id"); // alias for user_id
    const user = url.searchParams.get("user_id") ?? follower;
    const limit = Math.max(1, Math.min( Number(url.searchParams.get("limit") ?? "20"), 50 ));
    const cursor = Number(url.searchParams.get("cursor") ?? "0"); // simple OFFSET cursor

    // Followers of a specific creator => list user_ids
    if (creator) {
      const creator_id = Number(creator);
      if (!Number.isFinite(creator_id)) return bad("creator_id must be a number");
      const q = await db()
        .prepare("SELECT user_id FROM follows WHERE creator_id = ? ORDER BY user_id")
        .bind(creator_id)
        .all();
      return ok({ ok: true, creator_id, followers: (q.results ?? []).map((r: any) => r.user_id) });
    }

    // Creators a user follows, sorted by popularity, with cursor+limit
    if (user) {
      const user_id = Number(user);
      if (!Number.isFinite(user_id)) return bad("user_id must be a number");
      const q = await db()
        .prepare(
          `SELECT c.id, c.handle, c.display_name, c.thumbnail_url,
                  (SELECT COUNT(*) FROM follows f2 WHERE f2.creator_id = c.id) AS followers
           FROM creators c
           WHERE EXISTS (SELECT 1 FROM follows f WHERE f.user_id = ? AND f.creator_id = c.id)
           ORDER BY followers DESC, c.id ASC
           LIMIT ? OFFSET ?`
        )
        .bind(user_id, limit, cursor)
        .all();

      const rows = q.results ?? [];
      const next_cursor = rows.length === limit ? cursor + limit : null;
      return ok({
        ok: true,
        user_id,
        creators: rows.map((r: any) => ({
          id: r.id,
          handle: r.handle,
          display_name: r.display_name,
          thumbnail_url: r.thumbnail_url,
          followers: r.followers,
        })),
        cursor,
        next_cursor,
        limit,
      });
    }

    return bad("missing query: pass ?creator_id=… or ?user_id=… (or ?follower_id=…)");
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
    return ok({ ok: true, status: "following", follower_id, creator_id, changes: r.meta.changes });
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
      .prepare("DELETE FROM follows WHERE user_id = ? AND creator_id = ?")
      .bind(follower_id, creator_id)
      .run();
    return ok({
      ok: true,
      status: r.meta.changes ? "unfollowed" : "noop",
      follower_id,
      creator_id,
      changes: r.meta.changes,
    });
  } catch (err: any) {
    return bad(err?.message ?? "DELETE failed", 500);
  }
}
