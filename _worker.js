import mod from "./.open-next/server-functions/default/index.mjs";

export const config = {
  compatibility_date: "2024-09-01",
};

export default {
  async fetch(req, env, ctx) {
    const r = await mod.fetch(req, env, ctx);
    const h = new Headers(r.headers);
    h.set("x-worker", "active");
    return new Response(r.body, {
      status: r.status,
      statusText: r.statusText,
      headers: h,
    });
  },
};
