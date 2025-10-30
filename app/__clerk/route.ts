export const runtime="nodejs";
export const dynamic = 'force-dynamic';

function strip(path) {
  return path.replace(/^\/__clerk(?=\/|$)/, '');
}

async function proxy(req) {
  const u = new URL(req.url);
  const path = strip(u.pathname) + u.search;
  const upstream = `https://clerk.dubular.live${path}`;
  const res = await fetch(upstream, {
    method: req.method,
    headers: req.headers,
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req.body,
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
