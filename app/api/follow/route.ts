export const runtime = 'edge';

import { NextRequest } from 'next/server';
import { db } from '@/db';

export async function POST(req: NextRequest) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== 'number' || typeof creator_id !== 'number') {
      return Response.json({ ok: false, error: 'follower_id and creator_id must be numbers' }, { status: 400 });
    }
    await db().prepare(
      'INSERT INTO follows (user_id, creator_id) VALUES (?1, ?2)'
    ).bind(follower_id, creator_id).run();
    return Response.json({ ok: true, status: 'following', user_id: follower_id, creator_id });
  } catch (e: any) {
    return Response.json({ ok: false, error: e.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== 'number' || typeof creator_id !== 'number') {
      return Response.json({ ok: false, error: 'follower_id and creator_id must be numbers' }, { status: 400 });
    }
    await db().prepare(
      'DELETE FROM follows WHERE user_id = ?1 AND creator_id = ?2'
    ).bind(follower_id, creator_id).run();
    return Response.json({ ok: true, status: 'unfollowed', user_id: follower_id, creator_id });
  } catch (e: any) {
    return Response.json({ ok: false, error: e.message }, { status: 500 });
  }
}
