export const runtime = 'edge';
export const dynamic = 'force-dynamic';
import { auth } from '@clerk/nextjs/server';
import { getRequestContext } from '@cloudflare/next--on-pages';

type Row = { user_id: string; display_name: string | null; bio: string | null; created_at: number };

function db() {
  const ctx = getRequestContext();
  // @ts-ignore - running on Cloudflare Pages, D1 binding exists at env.DB
  return ctx.env?.DB | as D1Database;
}

async function ensureTable() {
  await db()
    .prepare(
      `CREATE TABLE IF NOT EXISTS profiles (
        user_id TEXT PRIMARY KEY,
        display_name TEXT,
        bio TEXT,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
      )`
    )
    .run();
}

export async function GET() {
  const { userId, sessionId } = auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  await ensureTable();
  const row = await db()
    .prepare('SELECT user_id, display_name, bio, created_at FROM profiles WHERE user_id = ?')
    .bind(userId)
    .first<Row>();
  return Response.json({ userId, sessionId, profile: row || null });
}

// [upsert]
export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  const { displayName = null, bio = null } = (await req.json().catch(() => ({}))) as {
    displayName?: string | null;
    bio?: string | null;
  };

  await ensureTable();

  await db()
    .prepare(
      `INSERT INTO profiles (user_id, display_name, bio)
      VALUES (?1, ?2, ?3)`
      )
    .bind(userId, displayName, bio)
    .run();

  const saved = await db()
    .prepare('SELECT user_id, display_name, bio, created_at FROM profiles WHERE user_id = ?')
    .bind(userId)
    .first<Row()>;

  return Response.json({ profile: saved });
}
