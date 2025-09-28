export const runtime = "edge";
import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

const ok  = (b: any, init = 200) => NextResponse.json(b, init);
const bad = (msg: string, status = 400) => ok({ error: msg }, status);

function db() {
  const d1 = (getRequestContext().env as any).DB as D1Database;
  if (!d1) throw new Error("D1 binding not found (check wrangler.toml [[d1_databases]])");
  return d1;
}

export async function GET(req: Request) {
  try {
    const url      = new URL(req.url);
    const creatorQ = url.searchParams.get("creator_id");
    const userQ    = url.searchParams.get("user_id");
    const limit    = Math.min(Math.max(Number(url.searchParams.get("limit") ?? "20"), 1), 50);
    const cursor   = Number(url.searchParams.get("cursor") ?? "0");

    if (!!creatorQ === !!userQ) {
      return bad("Pass exactly one of ?creator_id or ?user_id");
    }

    if (creatorQ) {
      const creator_id = Number(creatorQ);
      if (!Number.isFinite(creator_id)) return bad("creator_id must be a number");

      let sql = `
        SELECT u.id, u.username
        FROM follows f
        JOIN users u ON u.id = f.user_id
        WHERE f.creator_id = ?
      `;
      const args: any[] = [creator_id];

      if (cursor > 0) { sql += " AND u.id > ?"; args.push(cursor); }
      sql += " ORDER BY u.id ASC LIMIT ?";

      const rs = await db().prepare(sql).bind(...args, limit + 1).all();
      const list = (rs.results ?? []) as any[];
      const hasMore = list.length > limit;
      const followers = hasMore ? list.slice(0, limit) : list;
      const nextCursor = hasMore ? followers[followers.length - 1].id : undefined;

      return ok({ creator_id, followers, nextCursor });
    }

    const user_id = Number(userQ);
    if (!Number.isFinite(user_id)) return bad("user_id must be a number");

    let sql = `
      SELECT c.id, c.handle, c.display_name, c.thumbnail_url,
      (SELECT COUNT(*) FROM follows f2 WHERE f2.creator_id = c.id) AS followers_count
      FROM follows f
      JOIN creators c ON c.id = f.creator_id
      WHERE f.user_id = ?
    `;
    const args: any[] = [user_id];

    if (cursor > 0) { sql += " AND c.id > ?"; args.push(cursor); }
    sql += " ORDER BY c.id ASC LIMIT ?";

    const rs = await db().prepare(sql).bind(...args, limit + 1).all();
    const list = (rs.results ?? []) as any[];
    const hasMore = list.length > limit;
    const creators = hasMore ? list.slice(0, limit) : list;
    const nextCursor = hasMore ? creators[creators.length - 1].id : undefined;

    return ok({ user_id, creators, nextCursor });
  } catch (err: any) {
    return bad(err?.message ?? "GET /follows failed", 500);
  }
}
