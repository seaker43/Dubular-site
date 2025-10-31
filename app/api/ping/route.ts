// @ts-ignore
import { env } from 'cloudflare:env'
export const runtime="nodejs";
export async function GET(){return new Response('pong',{headers:{'content-type':'text/plain','Cache-Control':'no-store'}})}
