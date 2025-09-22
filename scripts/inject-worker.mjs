import { writeFileSync } from "fs";
const code = `import mod from "./server-functions/default/index.mjs";
export default { async fetch(req, env, ctx) {
  const r = await mod.fetch(req, env, ctx);
  const h = new Headers(r.headers);
  h.set("x-worker","active");
  return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
}};`;
writeFileSync("./.open-next/_worker.js", code);
