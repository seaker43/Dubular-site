export const runtime = "edge";
import { auth } from "@clerk/nextjs/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

type Body = {
  handle?: string;
  displayName?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
};

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { handle, displayName, bio, avatarUrl } = (await req.json()) as Body;
  const env: any = getRequestContext().env;
  const db = env?.DB;
  if (!db) return new Response("DB missing", { status: 500 });

  // What does the user already have?
  const existing = await db
    .prepare("SELECT handle FROM profiles WHERE user_id = ?")
    .bind(userId)
    .first<{ handle?: string }>();

  // Choose the handle to use
  let finalHandle = handle?.trim() || existing?.handle || "";
  const re = /^[a-z0-9_\.~-]{2,32}$/i;
  if (!finalHandle || !re.test(finalHandle)) {
    return new Response("Invalid handle", { status: 400 });
  }

  // If user is changing the handle, ensure uniqueness
  if (!existing?.handle || existing.handle.toLowerCase() !== finalHandle.toLowerCase()) {
    const taken = await db
      .prepare("SELECT user_id FROM profiles WHERE handle = ?")
      .bind(finalHandle)
      .first<{ user_id: string }>();
    if (taken && taken.user_id !== userId) {
      return new Response("Handle already taken", { status: 409 });
    }
  }

  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO profiles (user_id, handle, display_name, bio, avatar_url, updated_at)
       VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(user_id) DO UPDATE SET
         handle=excluded.handle,
         display_name=excluded.display_name,
         bio=excluded.bio,
         avatar_url=excluded.avatar_url,
         updated_at=excluded.updated_at`
    )
    .bind(userId, finalHandle, displayName ?? null, bio ?? null, avatarUrl ?? null, now)
    .run();

  return Response.json({ ok: true, handle: finalHandle });
}
