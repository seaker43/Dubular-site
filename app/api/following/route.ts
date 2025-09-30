import { NextResponse } from 'next/server';
import { getRequestContext } from 'next/dist/server/web/spec-extension/adapters/request-context';
export const runtime = 'edge';
export async function GET(req: Request) {
  try {
    const { env } = getRequestContext();
    const url = new URL(req.url);
    const creatorIdRaw = url.searchParams.get('creator_id');
    const handle = url.searchParams.get('handle');
    let creatorId = creatorIdRaw ? Number(creatorIdRaw) : undefined;
    if (!creatorId && handle) {
      const row = await env.DB.prepare('SELECT id FROM creators WHERE handle=?').bind(handle).first<{id:number}>();
      if (row) creatorId = row.id;
    }
    if (!creatorId || !Number.isFinite(creatorId)) {
      return NextResponse.json({ ok:false, error:'missing query: pass ?creator_id=… or ?handle=…' }, { status:400 });
    }
    const { results } = await env.DB.prepare(\`
      SELECT c.handle AS following_handle, c.display_name AS following_name, f.created_at
      FROM follows f
      JOIN creators c ON c.id = f.following_id
      WHERE f.follower_id = ?
      ORDER BY f.created_at DESC
      LIMIT 100
    \`).bind(creatorId).all();
    return NextResponse.json({ ok:true, following: results ?? [] });
  } catch (e:any) {
    console.error('API error /following:', e);
    return NextResponse.json({ ok:false, error: e?.message ?? String(e) }, { status:500 });
  }
}
