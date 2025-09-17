import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!_next|.*\\.(?:js|css|png|jpg|svg|ico|txt)).*)'],
};

export default function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set('Cache-Control', 'no-store');
  return res;
}
