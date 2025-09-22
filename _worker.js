import * as mod from './.open-next/server-functions/default/index.mjs';
let worker;
if (mod.handler) { worker = { async fetch(req, env, ctx){ return mod.handler(req, env, ctx); } }; }
else if (mod.default?.fetch) { worker = mod.default; }
else if (mod.fetch) { worker = { fetch: mod.fetch }; }
else { worker = { async fetch(){ return new Response('OpenNext handler not found', { status: 500 }); } }; }
export default {
  async fetch(req, env, ctx) {
    const r = await worker.fetch(req, env, ctx);
    r.headers.set('x-debug-worker','on');
    return r;
  }
};
