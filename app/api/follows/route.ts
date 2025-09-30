import { NextResponse } from 'next/server';
import { env } from 'cloudflare:workers';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const handle = url.searchParams.get('handle');
    if (!handle) {
      return NextResponse.json({ error: "Missing handle param" }, { status: 400 });
    }

    const { results } = await env.DB
      .prepare('SELECT follower_handle, following_handle, created_at FROM follows WHERE follower_handle = ?')
      .bind(handle)
      .all();

    return NextResponse.json({ ok: true, follows: results ?? [] });
  } catch (err) {
    console.error("API error /follows:", err);
    return NextResponse.json({ error: (err as any).message ?? String(err) }, { status: 500 });
  }
}
