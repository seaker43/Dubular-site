import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request, ctx: any) {
  try {
    const { results: creators } = await ctx.env.DB.prepare("SELECT id, handle, display_name, bio, created_at FROM creators").all();
    const enriched = [];
    for (const c of creators) {
      const { results: f1 } = await ctx.env.DB.prepare("SELECT COUNT(*) as cnt FROM follows WHERE following_handle = ?").bind(c.handle).all();
      const { results: f2 } = await ctx.env.DB.prepare("SELECT COUNT(*) as cnt FROM follows WHERE follower_handle = ?").bind(c.handle).all();
      enriched.push({ ...c, followers_count: f1[0].cnt, following_count: f2[0].cnt });
    }
    return NextResponse.json({ ok: true, creators: enriched });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch creators", detail: err.message }, { status: 500 });
  }
}
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