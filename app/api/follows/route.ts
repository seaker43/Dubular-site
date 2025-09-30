import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const handle = url.searchParams.get('handle');
    if (!handle) return NextResponse.json({ error: 'Missing handle param' }, { status: 400 });

    const { env } = getRequestContext();
    const { results } = await env.DB
      .prepare('SELECT follower_handle, following_handle, created_at FROM follows WHERE follower_handle = ?')
      .bind(handle)
      .all();

    return NextResponse.json({ ok: true, follows: results ?? [] });
  } catch (e) {
    console.error('API error /follows:', e);
    return NextResponse.json({ error: (e as any)?.message ?? String(e) }, { status: 500 });
  }
}
