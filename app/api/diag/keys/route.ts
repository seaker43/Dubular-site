export const runtime="edge"; export const dynamic="force-dynamic";
export async function GET(){return new Response(JSON.stringify({ok:true,time:new Date().toISOString()}),{headers:{"content-type":"application/json"}})}
