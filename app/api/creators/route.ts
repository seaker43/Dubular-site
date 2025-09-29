import { NextResponse } from 'next/server';
export const runtime = 'edge';

export async function GET(req, ctx) {
  try {
    const { results } = await ctx.env.DB.prepare(
      'SELECT id, handle, display_name, bio, created_at FROM creators LIMIT ?'
    ).bind(5).all();
    return NextResponse.json(results);
  } catch (err) {
    console.error('Error fetching creators:', err);
    return NextResponse.json({ error: 'Failed to fetch creators' }, { status: 500 });
  }
}