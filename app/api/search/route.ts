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
    const q = (url.searchParams.get("q") || "").trim();
    if (!q) return ok({ q, creators: [], streams: [] });

    const term = `%${q.replace(/%/g, "\\%").replace(/_/g, "\\_")}%`;

    const creators = await db()
      .prepare(
        `SELECT id, handle, display_name, bio, thumbnail_url FROM creators
                WHERE handle LIKE ? ESCAPE '\\' OR display_name LIKE ? ESCAPE '\\' OR bio LIKE ? ESCAPE '\\'
                ORDER BY handle LIMIT 20`,
      )
      .bind(term, term, term)
      .all();

    const streams = await db()
      .prepare(
        `SELECT s.id, s.title, s.is_live, s.viewers, s.thumbnail_url, s.started_at,
                      c.id AS creator_id, c.handle AS creator_handle, c.display_name AS creator_name
                FROM streams s JOIN creators c ON c.id = s.creator_id
                WHERE s.title LIKE ? ESCAPE '\\'
                ORDER BY s.is_live DESC, s.viewers DESC, s.started_at DESC
                LIMIT 20`,
      )
      .bind(term)
      .all();

    return ok({
      q,
      creators: creators.results ?? [],
      streams: streams.results ?? [],
    });
  } catch (err: any) {
    return bad(err?.message ?? "search failed", 500);
  }
}
