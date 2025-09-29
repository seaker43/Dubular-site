import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request, ctx: any) {
  const { searchParams } = new URL(req.url);
  const handle = searchParams.get("handle");
  if (!handle) return NextResponse.json({ error: "Missing handle" }, { status: 400 });
  try {
    const { results: followers } = await ctx.env.DB.prepare("SELECT follower_handle FROM follows WHERE following_handle = ?").bind(handle).all();
    const { results: following } = await ctx.env.DB.prepare("SELECT following_handle FROM follows WHERE follower_handle = ?").bind(handle).all();
    return NextResponse.json({ ok: true, handle, followers: followers.map(r => r.follower_handle), following: following.map(r => r.following_handle), counts: { followers: followers.length, following: following.length } });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch follows", detail: err.message }, { status: 500 });
  }
}
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
