export const runtime = "edge";
import { auth } from "@clerk/nextjs/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

type Body = {
  handle: string;
  displayName?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
};

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { handle, displayName, bio, avatarUrl } = (await req.json()) as Body;
  if (!handle || !/^[a-z0-9_\.~-]{2,32}$/i.test(handle))
    return new Response("Invalid handle", { status: 400 });

  const env: any = getRequestContext().env;
  const now = Date.now();

  // Ensure handle is unique (allow same user to keep their own)
  const taken = await env.DB
    .prepare("SELECT user_id FROM profiles WHERE handle = ?")
    .bind(handle)
    .first<{ user_id: string }>();

  if (taken && taken.user_id !== userId)
    return new Response("Handle already taken", { status: 409 });

  await env.DB
    .prepare(`INSERT INTO profiles (user_id,handle,display_name,bio,avatar_url,updated_at)
              VALUES (? ,?, ?, ?, ?, ?)
              ON CONFLICT(user_id) DO UPDATE SET
                handle=excluded.handle,
                display_name=excluded.display_name,
                bio=excluded.bio,
                avatar_url=excluded.avatar_url,
                updated_at=excluded.updated_at`)
    .bind(userId, handle, displayName ?? null, bio ?? null, avatarUrl ?? null, now)
    .run();

  return Response.json({ ok: true, handle });
}
