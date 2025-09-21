import worker from '../.open-next/server-functions/default/index.mjs';

// Adapt OpenNext's {fetch(req, env, ctx)} to Pages Functions' onRequest(ctx)
export async function onRequest(context) {
  return worker.fetch(context.request, context.env, { waitUntil: context.waitUntil });
}
