export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const FAPI = 'https://clerk.dubular.live';

function stripClerkPrefix(path: string) {
  return path.replace(/^\/clerk(?=\/|$)/, '');
}

async function proxy(req: Request) {
  const url = new URL(req.url);
  const path = stripClerkPrefix(url.pathname) + url.search;
  const upstream = FAPI + path;

  const h = new Headers(req.headers);
  // Ensure Clerk sees the correct host + forwarding info
  h.set('Host', 'clerk.dubular.live');
  h.set('X-Forwarded-Host', url.host);
  h.set('X-Forwarded-Proto', url.protocol.replace(':',''));
  h.set('X-Forwarded-For', (req.headers.get('x-forwarded-for') ?? ''));

  const res = await fetch(upstream, {
    method: req.method,
    headers: h,
    body: (req.method === 'GET' || req.method === 'HEAD') ? undefined : (req as any).body,
  });

  return new Response(res.body, { status: res.status, headers: res.headers });
}

export const GET     = proxy;
export const POST    = proxy;
export const PUT     = proxy;
export const DELETE  = proxy;
export const PATCH   = proxy;
export const OPTIONS = proxy;
export const HEAD    = proxy;
