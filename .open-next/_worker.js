import * as mod from "./server-functions/default/index.mjs";
let worker;
if (mod.handler) { worker = { async fetch(r,e,c){ return mod.handler(r,e,c) } }; }
else if (mod.default?.fetch) { worker = mod.default; }
else if (mod.fetch) { worker = { fetch: mod.fetch }; }
else { worker = { async fetch(){ return new Response("OpenNext handler not found.",{status:500}) } }; }
export default { async fetch(req,env,ctx){ const resp = await worker.fetch(req,env,ctx); const h=new Headers(resp.headers); h.set("x-debug-worker","dubular-open-next"); return new Response(resp.body,{status:resp.status,headers:h}); }};
