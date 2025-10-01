import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Public routes (everything else requires auth; notably /favorites is NOT here)
const isPublicRoute = createRouteMatcher([
  "/",                 // home
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
  // All others will be protected by Clerk; unauthed users get redirected to /sign-in
});

// Cloudflare Pages–safe matcher:
// - excludes _next/* (static & image optimizer)
// - excludes any URL that looks like a file (has an extension)
// - still applies to root, app routes, and /api|/trpc paths
export const config = {
  matcher: [
    "/((?!(?:_next/|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|css|js|map|txt|xml|json|woff2?|ttf))|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};
