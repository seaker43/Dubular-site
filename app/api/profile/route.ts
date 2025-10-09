export const runtime = 'edge';
import { auth } from '@clerk/nextjs/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

type Row = { user_id: string; display_name: string | null; bio: string | null; created_at: number };

function db(): any {
  // Cloudflare Pages D1 binding
  return (getRequestContext().env as any).DB;
}

export async function GET(req: Request) {
  // debug: show incoming headers
  console.log('[Auth Headers Debug]', Object.fromEntries(req.headers.entries()));

  const { userId, sessionId } = auth();
  if (!userId) return new Response('Unauthorized', { status: 401 });

  // make sure table exists (no-op if already there)
  await db().exec(
    "CREATE TABLE IF NOT EXISTS profiles (user_id TEXT PRIMARY KEY, display_name TEXT, bio TEXT, created_at INTEGER DEFAULT (strftime('%s','now')))"
  );

  const row = await db()
    .prepare("SELECT user_id, display_name, bio, created_at FROM profiles WHERE user_id = ?")
    .bind(userId)
    .first<Row>();

  return Response.json({ userId, sessionId, profile: row ?? null });
}
