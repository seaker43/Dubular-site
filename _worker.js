import worker from './.open-next/worker/index.mjs';
export default { fetch: (req, env, ctx) => worker.fetch(req, env, ctx) };
