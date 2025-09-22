import base from "./.open-next/_worker.js";

const inner = (base?.default ?? base);

export default {
  async fetch(req, env, ctx) {
    if (!inner?.fetch) {
      return new Response("OpenNext prebuilt worker missing.", { status: 500 });
    }
    const resp = await inner.fetch(req, env, ctx);
    const h = new Headers(resp.headers);
    h.set("x-debug-worker", "dubular-open-next");
    return new Response(resp.body, { status: resp.status, headers: h });
  }
};
