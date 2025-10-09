export const runtime = 'edge';
import { auth, getAuth } from '@clerk/nextjs/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

type Row = { user_id: string; display_name: string | null; bio: string | null; created_at: number };

function db(): any {
  return (getRequestContext().env as any).DB;
}

export async function GET(req: Request) {
  // debug: confirm cookies/headers arrive
  console.log('[Auth Headers Debug]', Object.fromEntries(req.headers.entries()));

  // try auth(); fall back to getAuth(req) for environments where auth() doesn't bind
  let { userId, sessionId } = auth();
  if (!userId) {
    const a = getAuth(req as any);
    userId = a.userId || null;
    sessionId = a.sessionId || null;
  }

  if (!userId) return new Response('Unauthorized', { status: 401 });

  await db().exec(
    "CREATE TABLE IF NOT EXISTS profiles (user_id TEXT PRIMARY KEY, display_name TEXT, bio TEXT, created_at INTEGER DEFAULT (strftime('%s','now')))"
  );

  const row = await db()
    .prepare("SELECT user_id, display_name, bio, created_at FROM profiles WHERE user_id = ?")
    .bind(userId)
    .first<Row>();

  return Response.json({ userId, sessionId, profile: row ?? null });
}
