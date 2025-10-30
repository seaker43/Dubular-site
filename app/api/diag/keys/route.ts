export const runtime = 'edge';
import { getRequestContext } from 'cloudflare:env';
export async function GET(){
  try{
    const ctx = getRequestContext?.();
    const env:any = ctx?.env || {};
    const result = {
      hasCtx: !!ctx,
      hasEnv: !!env,
      publishable: !!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      secret: !!env.CLERK_SECRET_KEY,
      frontendApi: env.NEXT_PUBLIC_CLERK_FRONTEND_API ?? null,
      cookieDomain: env.CLERK_COOKIE_DOMAIN ?? null
    };
    return new Response(JSON.stringify(result,null,2),{headers:{"content-type":"application/json"}});
  }catch(e:any){
    return new Response(JSON.stringify({ error: e?.message ?? "diag failed" }, null, 2), { status: 500, headers: {"content-type":"application/json"}});
  }
}
