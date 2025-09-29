import { NextResponse } from 'next/server';
export const runtime = 'edge';

export async function GET(req: Request, ctx: { env: { DB: D1Database } }) {
  try {
    const url = new URL(req.url);
    const limit = Number(url.searchParams.get('limit') || 10);
    const { results } = await ctx.env.DB.prepare('SELECT * FROM follows LIMIT ?').bind(limit).all();
    return NextResponse.json(results);
  } catch (err) {
    console.error('Error fetching follows:', err);
    return NextResponse.json({ error: 'Failed to fetch follows' }, { status: 500 });
  }
}
