export const runtime="edge";
export const dynamic="force-dynamic";
import { getRequestContext } from "@cloudflare/next-on-pages";
export async function GET(){
 try {
   const env = getRequestContext().env;
   return new Response(JSON.stringify({
     hasPublishableKey: !!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
     hasSecretKey: !!env.CLERK_SECRET_KEY,
     frontendApi: env.NEXT_PUBLIC_CLERK_FRONTEND_API || null,
     cookieDomain: env.CLERK_COOKIE_DOMAIN || null
   }), { headers: { "content-type": "application/json" } });
 } catch(e) {
   return new Response(JSON.stringify({ error: e?.message || "diag failed" }), { status: 500, headers: { "content-type": "application/json" } });
 }
}