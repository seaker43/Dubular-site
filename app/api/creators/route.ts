import { NextResponse } from "next/server";
import { getRequestContext } from "@opennextjs/cloudflare";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const limitRaw = url.searchParams.get("limit");
    const n = Number(limitRaw ?? 5);
    const limit = Number.isFinite(n) ? Math.min(Math.max(n, 1), 50) : 5;

    const { env } = getRequestContext();
    const { results } = await env.DB.prepare(
      "SELECT id, handle, display_name, bio, created_at FROM creators LIMIT ?",
    )
      .bind(limit)
      .all();

    return NextResponse.json({ ok: true, creators: results ?? [] });
  } catch (e) {
    console.error("API error /creators:", e);
    return NextResponse.json(
      { error: (e as any)?.message ?? String(e) },
      { status: 500 },
    );
  }
}
