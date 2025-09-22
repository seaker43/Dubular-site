import mod from './.open-next/server-functions/default/index.mjs';
export const config = { compatibility_date: '2024-09-22', nodejs_compat: true };
const handler = mod?.default?.fetch ?? mod?.fetch ?? mod?.default;
export default {
  async fetch(req, env, ctx) {
    const res = await handler(req, env, ctx);
    const hdrs = new Headers(res.headers);
    hdrs.set('x-worker', 'dubular');
    return new Response(res.body, { ...res, headers: hdrs });
  }
};
