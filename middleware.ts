import type { NextRequest } from 'next/server';
export const config = { matcher: ['/((?!_next|.*\\.(?:js|css|png|jpg|svg|ico|txt)).*)'] };
export default function middleware(req: NextRequest) {
  const res = new Response(null, { status: 200 });
  res.headers.set('x-noop', '1');                     // OpenNext needs a response
  res.headers.set('Cache-Control', 'no-store');       // prevent edge/browser cache
  return res;
}
