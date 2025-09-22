export const config = { compatibility_date: "2024-09-01", compatibility_flags: ["nodejs_compat"] };
export const config = { compatibility_date: "2024-09-01", compatibility_flags: ["nodejs_compat"] };
import handler from "./.open-next/server-functions/default/index.mjs";export default {async fetch(req,env,ctx){let res=await handler.fetch(req,env,ctx);res=new Response(res.body,res);res.headers.set("x-debug-worker","on");res.headers.set("Cache-Control","no-store");return res;}};
