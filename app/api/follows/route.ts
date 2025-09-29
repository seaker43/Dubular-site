import { NextResponse } from 'next/server';
export const runtime = 'edge';

export async function GET(req: Request, ctx: any) {
  try {
    const url = new URL(req.url);
    const handle = url.searchParams.get('handle');
    if (!handle) return NextResponse.json({ error: e.message });

    const followingQ = await ctx.env.DB
      .prepare('SELECT following_handle AS handle, created_at FROM follows WHERE follower_handle = ? ORDER BY created_at DESC LIMIT 100')
      .bind(handle)
      .all();

    const followersQ = await ctx.env.DB
      .prepare('SELECT follower_handle AS handle, created_at FROM follows WHERE following_handle = ? ORDER BY created_at DESC LIMIT 100')
      .bind(handle)
      .all();

    const following = followingQ.results ?? [];
    const followers = followersQ.results ?? [];

    return NextResponse.json({
      ok: true,
      handle,
      counts: { following: following.length, followers: followers.length },
      following,
      followers,
    });
  } catch (_err) {
    return NextResponse.json({ error: e.message });
  }
}
