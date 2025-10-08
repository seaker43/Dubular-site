import { clerkMiddleware } from '@clerk/nextjs/server';

undefined

export const config = {
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)',
    '/api/:path*',
  ],
};
