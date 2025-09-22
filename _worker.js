import handler from "./.open-next/server-functions/default/index.mjs"; console.log("Worker started"); export default { async fetch(req, env, ctx) { return handler.fetch(req, env, ctx); } };
