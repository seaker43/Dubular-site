import mod from "./server-functions/default/index.mjs";

export default {
  async fetch(req, env, ctx) {
    const res = await mod.fetch(req, env, ctx);
    const headers = new Headers(res.headers);
    headers.set("x-worker", "active");
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  },
};
