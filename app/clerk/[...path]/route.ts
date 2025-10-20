export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const FAPI = 'https://clerk.dubular.live';
function stripClerkPrefix(p: string) { return p.replace(/^\/clerk(?=\/|$)/, ''); }

async function proxy(req: Request) {
  const url = new URL(req.url);
  const path = stripClerkPrefix(url.pathname) + url.search;
  const upstream = FAPI + path;
  const res = await fetch(upstream, {
    method: req.method,
    headers: req.headers,
    body: (req.method === 'GET' || req.method === 'HEAD') ? undefined : (req as any).body
  });
  return new Response(res.body, { status: res.status, headers: res.headers });
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const DELETE = proxy;
export const PATCH = proxy;
export const OPTIONS = proxy;
export const HEAD = proxy;
