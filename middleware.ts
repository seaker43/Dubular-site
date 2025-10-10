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

// Satellite-aware Clerk middleware (turn on debug so we can see which domain config is used)
const clerkConfig = { debug: true };

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;
  await auth.protect();
}, clerkConfig);

export const config = {
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
