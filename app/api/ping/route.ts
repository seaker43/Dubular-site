// @ts-ignore

export const runtime="nodejs";
export async function GET(){
  const { env } = await import("cloudflare:env");return new Response('pong',{headers:{'content-type':'text/plain','Cache-Control':'no-store'}})}
