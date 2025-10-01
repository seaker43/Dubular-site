import { kvGetJson, kvPutJson } from "../../lib/kv";
import { normalizeHandle, isValidHandle } from "../../lib/handles";
import type { UserProfile } from "../../lib/types";
export const onRequestPost: PagesFunction<{ KV: KVNamespace }> = async (
  ctx,
) => {
  const kv = ctx.env.KV;
  const userId = ctx.request.headers.get("x-user-id");
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const body = await ctx.request.json();
  const now = Date.now();
  const nextHandle = normalizeHandle(body.handle || "");
  if (!isValidHandle(nextHandle))
    return new Response("Bad handle", { status: 400 });
  const current = (await kvGetJson<UserProfile>(kv, `user:${userId}`)) || null;
  if (!current || current.handle !== nextHandle) {
    const existingUserId = await kv.get(`handle:${nextHandle}`);
    if (existingUserId && existingUserId !== userId)
      return new Response("Handle taken", { status: 409 });
  }
  const updated: UserProfile = {
    id: userId,
    handle: nextHandle,
    displayName: body.displayName || current?.displayName || "",
    avatarUrl: body.avatarUrl ?? current?.avatarUrl,
    bio: body.bio ?? current?.bio,
    socials: body.socials ?? current?.socials ?? {},
    role: body.role || current?.role || "viewer",
    createdAt: current?.createdAt || now,
    updatedAt: now,
  };
  await kvPutJson(kv, `user:${userId}`, updated);
  await kv.put(`handle:${nextHandle}`, userId);
  return new Response(JSON.stringify(updated), {
    headers: { "content-type": "application/json" },
  });
};
