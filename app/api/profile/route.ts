export const runtime = 'edge';

import { auth, getAuth } from '@clerk/nextjs/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export async function GET(req: Request) {
  try {
    // ----- gather auth -----
    let { userId, sessionId } = auth();
    if (!userId) {
      const a = getAuth(req as any);
      userId = a.userId ?? null;
      sessionId = a.sessionId ?? null;
    }

    // ----- gather env (don’t touch DB yet) -----
    let hasCtx = false, hasEnv = false, hasD1 = false, cookieDomain = null as null | string;
    let frontendApi = null as null | string;

    try {
      const ctx = getRequestContext();
      hasCtx = !!ctx;
      // @ts-ignore
      const env = ctx?.env;
      hasEnv = !!env;
      // @ts-ignore
      hasD1 = !!env?.DB;
      // @ts-ignore
      frontendApi = env?.CLERK_PUBLISHABLE_KEY ? 'via env key' : null;
      // @ts-ignore
      cookieDomain = env?.CLERK_JWT_KEY ? '.dubular.live' : null;
    } catch (_) {}

    // ----- echo headers/cookies so we see what arrives at the edge -----
    const headers = Object.fromEntries(req.headers.entries());
    const cookies = headers['cookie'] ?? '';

    return Response.json({
      ok: true,
      userId,
      sessionId,
      hasCtx,
      hasEnv,
      hasD1,
      cookieDomain,
      frontendApi,
      headersSample: {
        host: headers['host'],
        cfRay: headers['cf-ray'],
        secFetchSite: headers['sec-fetch-site'],
      },
      hasCookieHeader: Boolean(cookies),
      cookiesPreview: cookies.slice(0, 200),
    });
  } catch (err: any) {
    return new Response(`Route error: ${err?.message || String(err)}`, { status: 500 });
  }
}
