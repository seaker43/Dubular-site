export const runtime = 'edge';
import { auth } from '@clerk/nextjs/server';

export async function GET(req: Request) {
  try {
    const { userId, sessionId } = auth();
    const headers = Object.fromEntries(req.headers.entries());
    const cookies = headers['cookie'] || '';
    return Response.json({
      ok: true,
      userId,
      sessionId,
      hasCookieHeader: Boolean(cookies),
      cookiesPreview: cookies.slice(0, 200),
      headersSample: { host: headers['host'], cfRay: headers['cf-ray'], secFetchSite: headers['sec-fetch-site'] }
    });
  } catch (err: any) {
    return new Response('Route error: '+(err?.message || String(err)), { status: 500 });
  }
}
