export const runtime = "edge";
import { NextResponse } from "next/server";

// simple in-memory store that persists across requests on the same worker
type Follow = { creator_id: number; follower_id: number; ts: number };
const store: Map<string, Follow> =
  (globalThis as any).__FOLLOW_STORE ?? ((globalThis as any).__FOLLOW_STORE = new Map());

const ok = (data: Record<string, unknown>, init?: ResponseInit) =>
  NextResponse.json(data, init);
const bad = (msg: string, status = 400) => ok({ error: msg }, { status });

const parseIds = (url: string, body?: any) => {
  const u = new URL(url);
  const sp = u.searchParams;
  const creator_id = Number(sp.get("creator_id") ?? body?.creator_id);
  const follower_id = Number(sp.get("follower_id") ?? body?.follower_id);
  return { creator_id, follower_id };
};
const key = (c: number, f: number) => `${c}:${f}`;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const creator = searchParams.get("creator_id");
  const follower = searchParams.get("follower_id");

  if (!creator && !follower) {
    return bad("pass ?creator_id=… to list followers, or ?follower_id=… to list creators");
  }

  if (creator) {
    const cid = Number(creator);
    const followers = [...store.values()]
      .filter((f) => f.creator_id === cid)
      .map((f) => f.follower_id);
    return ok({ creator_id: cid, followers });
  } else {
    const fid = Number(follower);
    const creators = [...store.values()]
      .filter((f) => f.follower_id === fid)
      .map((f) => f.creator_id);
    return ok({ follower_id: fid, creators });
  }
}

export async function POST(req: Request) {
  let body: any = {};
  try { body = await req.json().catch(() => ({})); } catch {}
  const { creator_id, follower_id } = parseIds(req.url, body);
  if (!Number.isFinite(creator_id) || !Number.isFinite(follower_id)) {
    return bad("creator_id and follower_id must be numbers");
  }
  const k = key(creator_id, follower_id);
  store.set(k, { creator_id, follower_id, ts: Date.now() });
  return ok({ ok: true, status: "following", creator_id, follower_id });
}

export async function DELETE(req: Request) {
  let body: any = {};
  try { body = await req.json().catch(() => ({})); } catch {}
  const { creator_id, follower_id } = parseIds(req.url, body);
  if (!Number.isFinite(creator_id) || !Number.isFinite(follower_id)) {
    return bad("creator_id and follower_id must be numbers");
  }
  const removed = store.delete(key(creator_id, follower_id));
  return ok({ ok: true, status: removed ? "unfollowed" : "noop", creator_id, follower_id });
}
