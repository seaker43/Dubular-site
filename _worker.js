let worker;
try {
  const mod = await import("./.open-next/server-functions/default/index.mjs");
  if (mod.handler) {
    worker = { async fetch(request, env, ctx) { return mod.handler(request, env, ctx); } };
  } else if (mod.default?.fetch) {
    worker = mod.default;
  } else if (mod.fetch) {
    worker = { fetch: mod.fetch };
  } else {
    worker = { async fetch() { return new Response("OpenNext handler not found.", { status: 500 }); } };
  }
} catch (e) {
  worker = { async fetch() { return new Response("OpenNext failed to load.", { status: 500 }); } };
}
export default worker;
