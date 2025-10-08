export const runtime="edge";
export const dynamic="force-dynamic";
import { getRequestContext } from "@cloudflare/next-on-pages";
export async function GET(){
 try {
   const ctx = getRequestContext?.();
   const env = ctx?.env || {};
   const result = {
     hasCtx: !!ctx,
     hasEnv: !!env,
     hasPublishableKey: !!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
     hasSecretKey: !!env.CLERK_SECRET_KEY,
     frontendApi: env.NEXT_PUBLIC_CLERK_FRONTEND_API || null,
     cookieDomain: env.CLERK_COOKIE_DOMAIN || null
   };
   return new Response(JSON.stringify(result,null,2), { headers: { "content-type": "application/json" } });
 } catch(e) {
   return new Response(JSON.stringify({ error: e?.message, stack: e?.stack },null,2), { status: 500, headers: { "content-type": "application/json" } });
 }
}