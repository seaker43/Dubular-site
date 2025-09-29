import { NextResponse } from 'next/server';
export const runtime = 'edge';

export async function GET(req: Request, ctx: any) {
  try {
    const url = new URL(req.url);
    const limitRaw = url.searchParams.get('limit');
    const limitNum = Number(limitRaw ?? 5);
    const limit = Number.isFinite(limitNum) ? Math.min(Math.max(limitNum, 1), 50) : 5;

    const { results } = await ctx.env.DB
      .prepare('SELECT id, handle, display_name, bio, created_at FROM creators LIMIT ?')
      .bind(limit)
      .all();

    return NextResponse.json({ ok: true, creators: results ?? [] });
  } catch (_err) {
    console.error("API error:", e); return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
