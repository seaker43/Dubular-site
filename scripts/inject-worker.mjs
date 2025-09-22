import { cpSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

const dst = "./.open-next/_worker.js";
mkdirSync(dirname(dst), { recursive: true });

if (existsSync("./_worker.js")) {
  // If you keep a root-level worker, copy it into the build output
  cpSync("./_worker.js", dst);
  console.log("[postbuild] Copied root _worker.js -> .open-next/_worker.js");
} else {
  // Otherwise, generate a minimal wrapper that forwards to OpenNext default server
  const code = `import mod from "./server-functions/default/index.mjs";
export default {
  async fetch(req, env, ctx) {
    const r = await mod.fetch(req, env, ctx);
    const h = new Headers(r.headers);
    h.set("x-worker", "active");
    return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
  }
};`;
  writeFileSync(dst, code);
  console.log("[postbuild] Generated .open-next/_worker.js");
}
