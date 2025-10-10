import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/robots.txt',
  '/sitemap.xml',
  '/api/health',
  '/api/ping',
  '/api/diag/keys',
  '/api/whoami',
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;
  await auth.protect();
});

// no runtime export here

export const config = {
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
