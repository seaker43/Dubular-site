export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

const ok = (b: any, init?: number | ResponseInit) =>
  NextResponse.json(b, typeof init === 'number' ? { status: init } : init);
const bad = (msg: string, status = 400) =>
  ok({ ok: false, error: msg }, { status, headers: { 'content-type': 'application/json' } });

function d1() {
  const db = (getRequestContext().env as any)?.DB as any;
  if (!db) throw new Error('D1 binding not found');
  return db;
}
const toInt = (v: string | null) => (v != null && v !== '' ? Number(v) : NaN);

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const userId = toInt(url.searchParams.get('user_id') ?? url.searchParams.get('follower_id'));
    const creatorId = toInt(url.searchParams.get('creator_id'));

    if (!Number.isNaN(userId)) {
      const q = await d1()
        .prepare('SELECT creator_id FROM follows WHERE user_id = ? ORDER BY creator_id')
        .bind(userId)
        .all();
      return ok({
        ok: true,
        user_id: userId,
        creators: (q.results ?? []).map((r: any) => ({ creator_id: r.creator_id })),
        cursor: 0,
        next_cursor: null,
        limit: 20,
      });
    }

    if (!Number.isNaN(creatorId)) {
      const q = await d1()
        .prepare('SELECT user_id FROM follows WHERE creator_id = ? ORDER BY user_id')
        .bind(creatorId)
        .all();
      return ok({
        ok: true,
        creator_id: creatorId,
        followers: (q.results ?? []).map((r: any) => ({ user_id: r.user_id })),
        cursor: 0,
        next_cursor: null,
        limit: 20,
      });
    }

    return bad('missing query: pass ?user_id=… or ?creator_id=…');
  } catch (err: any) {
    return bad(err?.message ?? 'GET failed', 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { user_id, follower_id, creator_id } = await req.json();
    const uid = Number(user_id ?? follower_id);
    const cid = Number(creator_id);
    if (!Number.isFinite(uid) || !Number.isFinite(cid)) {
      return bad('user_id and creator_id must be numbers');
    }
    await d1()
      .prepare('INSERT OR IGNORE INTO follows (user_id, creator_id) VALUES (?, ?)')
      .bind(uid, cid)
      .run();
    return ok({ ok: true, status: 'following', user_id: uid, creator_id: cid });
  } catch (err: any) {
    return bad(err?.message ?? 'POST failed', 500);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { user_id, follower_id, creator_id } = await req.json();
    const uid = Number(user_id ?? follower_id);
    const cid = Number(creator_id);
    if (!Number.isFinite(uid) || !Number.isFinite(cid)) {
      return bad('user_id and creator_id must be numbers');
    }
    const r = await d1()
      .prepare('DELETE FROM follows WHERE user_id = ? AND creator_id = ?')
      .bind(uid, cid)
      .run();
    const changed = (r as any)?.meta?.changes ?? 0;
    return ok({ ok: true, status: changed ? 'unfollowed' : 'noop', user_id: uid, creator_id: cid });
  } catch (err: any) {
    return bad(err?.message ?? 'DELETE failed', 500);
  }
}
