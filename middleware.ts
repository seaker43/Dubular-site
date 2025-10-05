import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Public routes: homepage, browse pages, and full auth trees (/sign-in/*, /sign-up/*)
const isPublicRoute = createRouteMatcher([
  "/",
  "/search(.*)",
  "/rank(.*)",
  "/streams(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  // add any truly public API paths here if needed, e.g. "/api/public(.*)"
]);

export default clerkMiddleware((auth, req) => {
  // Allow public routes
  if (isPublicRoute(req)) return;
  // All others require auth; unauthenticated users are redirected by Clerk
});

// Cloudflare Pages–safe matcher:
// - excludes _next/* (static & image optimizer) and files with extensions
// - applies to app routes and /api|/trpc
export const config = {
  matcher: [
    '/((?!api|_next|favicon\.ico|.*\..*).*)'
  ],
};
