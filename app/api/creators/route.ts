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
    const url    = new URL(req.url);
    const qRaw   = (url.searchParams.get("q") ?? "").trim();
    const limit  = Math.min(Math.max(Number(url.searchParams.get("limit") ?? "20"), 1), 50);
    const cursor = Number(url.searchParams.get("cursor") ?? "0");

    const conds: string[] = [];
    const args: any[] = [];

    if (qRaw) {
      const like = `%${qRaw}%`;
      conds.push("(c.handle LIKE ? OR c.display_name LIKE ? OR c.bio LIKE ?)");
      args.push(like, like, like);
    }
    if (Number.isFinite(cursor) && cursor > 0) {
      conds.push("c.id > ?");
      args.push(cursor);
    }

    let sql = `
      SELECT
        c.id, c.handle, c.display_name, c.bio, c.thumbnail_url,
        (SELECT COUNT(*) FROM follows f WHERE f.creator_id = c.id) AS followers
      FROM creators c
    `;
    if (conds.length) sql += " WHERE " + conds.join(" AND ");
    sql += " ORDER BY followers DESC, c.id ASC LIMIT ?";

    const rows = await db().prepare(sql).bind(...args, limit + 1).all();
    const list = (rows.results ?? []) as any[];

    const hasMore    = list.length > limit;
    const creators   = hasMore ? list.slice(0, limit) : list;
    const nextCursor = hasMore ? creators[creators.length - 1].id : undefined;

    return ok({ creators, nextCursor, q: qRaw || undefined });
  } catch (err: any) {
    return bad(err?.message ?? "GET /creators failed", 500);
  }
}
