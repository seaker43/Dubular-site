import mod from "./.open-next/server-functions/default/index.mjs";

export const config = { compatibility_date: "2024-09-01" };

export default {
  async fetch(req, env, ctx) {
    const res = await mod.fetch(req, env, ctx);
    const newHeaders = new Headers(res.headers);
    newHeaders.set("x-worker", "active");
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: newHeaders });
  }
};
