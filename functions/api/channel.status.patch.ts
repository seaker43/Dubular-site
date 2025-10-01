export const onRequestPatch: PagesFunction<{ KV: KVNamespace }> = async (
  ctx,
) => {
  const kv = ctx.env.KV;
  const userId = ctx.request.headers.get("x-user-id");
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const { isLive } = await ctx.request.json();
  const key = `channel:${userId}`;
  const ch = JSON.parse((await kv.get(key)) || "null");
  if (!ch) return new Response("Channel not found", { status: 404 });
  ch.isLive = !!isLive;
  ch.updatedAt = Date.now();
  await kv.put(key, JSON.stringify(ch));
  return new Response(JSON.stringify(ch), {
    headers: { "content-type": "application/json" },
  });
};
