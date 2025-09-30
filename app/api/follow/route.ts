import { NextResponse } from 'next/server';
import { getRequestContext } from 'next/dist/server/web/spec-extension/adapters/request-context';
export const runtime = 'edge';
export async function POST(req: Request) {
  try {
    const { env } = getRequestContext();
    const { follower_handle, following_handle, action } = await req.json();
    if (!follower_handle || !following_handle || !['follow','unfollow'].includes(action)) {
      return NextResponse.json({ ok:false, error:'body: follower_handle, following_handle, action required' }, { status:400 });
    }
    const follower = await env.DB.prepare('SELECT id FROM creators WHERE handle=?').bind(follower_handle).first<{id:number}>();
    const following = await env.DB.prepare('SELECT id FROM creators WHERE handle=?').bind(following_handle).first<{id:number}>();
    if (!follower || !following) {
      return NextResponse.json({ ok:false, error:'unknown follower_handle or following_handle' }, { status:404 });
    }
    if (action === 'follow') {
      await env.DB.prepare('INSERT OR IGNORE INTO follows (follower_id, following_id) VALUES (?, ?)').bind(follower.id, following.id).run();
      return NextResponse.json({ ok:true, status:'followed' });
    } else {
      await env.DB.prepare('DELETE FROM follows WHERE follower_id=? AND following_id=?').bind(follower.id, following.id).run();
      return NextResponse.json({ ok:true, status:'unfollowed' });
    }
  } catch (e:any) {
    console.error('API error /follow:', e);
    return NextResponse.json({ ok:false, error: e?.message ?? String(e) }, { status:500 });
  }
}
