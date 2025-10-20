import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isPublicRoute = createRouteMatcher([
  '/clerk(.*)',
  "/",
  "/robots.txt",
  "/sitemap.xml",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/sso-callback(.*)",
  "/api/health",
  "/api/ping",
  "/api/diag/keys",
  "/api/whoami",
  "/u/(.*)",
  "/search(.*)",
  "/rank(.*)",
  "/__clerk(.*)",
]);
export default clerkMiddleware((auth, req) => { if (isPublicRoute(req)) return; auth().protect(); }, { debug: true });
export const config = { matcher: ["/((?!_next/|.*\\..*).*)", "/"] };