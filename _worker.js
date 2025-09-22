import mod from "./.open-next/server-functions/default/index.js";

export const config = {compatibility_date:"2024-09-01",compatibility_flags:["nodejs_compat"]};

const handler=mod?.default?.fetch||mod?.fetch||mod?.default||mod?.handler;

export default {async fetch(request,env,ctx){if(!handler){return new Response("No handler found in OpenNext output",{status:500});}const res=await handler(request,env,ctx);const response=res instanceof Response?res:new Response(res);response.headers.set("x-worker","dubular-beta");return response;}};
