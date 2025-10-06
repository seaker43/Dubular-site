export const runtime='edge';
export async function GET(){return new Response(JSON.stringify({ok:true}),{headers:{'content-type':'application/json'}})}
export async function POST(req:Request){const b=await req.json().catch(()=>({}));return new Response(JSON.stringify({ok:true,received:b}),{headers:{'content-type':'application/json'}})}
