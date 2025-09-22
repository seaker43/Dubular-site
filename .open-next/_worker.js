import mod from "./.open-next/server-functions/default/index.mjs";
export const config={compatibility_date:"2024-09-01",compatibility_flags:["nodejs_compat"]};
const h=mod?.default?.fetch??mod?.fetch??mod?.default??mod?.handler;
export default{async fetch(req,env,ctx){const fn=h||((_r)=>new Response("handler missing",{status:500}));const res=await fn(req,env,ctx);try{res.headers.set("x-worker","dubular-beta");}catch{};return res;}};
