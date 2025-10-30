export const runtime="nodejs";
export const dynamic = 'force-dynamic';

const CLERK_FAPI = 'https://clerk.dubular.live';

async function handler(req) {
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/clerk(?=\/|$)/, '') + url.search;
  const upstream = CLERK_FAPI + path;

  const headers = new Headers(req.headers);
  headers.set('Host', 'clerk.dubular.live');
  headers.set('X-Forwarded-Host', url.host);
  headers.set('X-Forwarded-Proto', url.protocol.replace(':',''));
  headers.set('X-Forwarded-For', req.headers.get('x-forwarded-for') || '');

  const res = await fetch(upstream, {
    method: req.method,
    headers,
    body: (req.method === 'GET' || req.method === 'HEAD') ? undefined : req.body,
  });

  return new Response(res.body, { status: res.status, headers: res.headers });
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE, handler as PATCH, handler as OPTIONS, handler as HEAD };
