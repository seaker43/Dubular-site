export const runtime = 'edge';
import { NextResponse } from "next/server";

const ok = (b: any, init = 200) =>
  NextResponse.json(b, typeof init === "number" ? { status: init } : init);
const bad = (m: string, s = 400) => ok({ error: m }, s);

function db() {
  const d1 = (env as any).DB as D1Database;
  if (!d1)
    throw new Error(
      "D1 binding not found (check wrangler.toml [[env.production.d1_databases]])",
    );
  return d1;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const onlyLive = url.searchParams.get("live") === "1";
    const creator_id = url.searchParams.get("creator_id");
    const args: any[] = [];

    let where = "1=1";
    if (onlyLive) {
      where += " AND s.is_live = 1";
    }
    if (creator_id) {
      where += " AND s.creator_id = ?";
      args.push(Number(creator_id));
    }

    const q = await db()
      .prepare(
        `SELECT s.id, s.title, s.is_live, s.viewers, s.thumbnail_url, s.started_at,
                       c.id AS creator_id, c.handle AS creator_handle, c.display_name AS creator_name
                FROM streams s JOIN creators c ON c.id = s.creator_id
                WHERE ${where}
                ORDER BY s.is_live DESC, s.viewers DESC, s.started_at DESC
                LIMIT 50`,
      )
      .bind(...args)
      .all();

    return ok({ streams: q.results ?? [] });
  } catch (err: any) {
    return bad(err?.message ?? "streams failed", 500);
  }
}
