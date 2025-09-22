import mod from "./.open-next/server-functions/default/index.mjs";
export const config = { compatibility_date: "2024-09-23" };
export default {
  async fetch(req, env, ctx) {
    // Optional: prove the worker runs
    const h = new Headers(req.headers);
    h.set("x-worker", "active");
    return await mod.fetch(new Request(req, { headers: h }), env, ctx);
  },
};
