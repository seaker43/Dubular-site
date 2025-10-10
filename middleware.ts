import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
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
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return;
  auth().protect();
}, { debug: true });

export const config = {
  matcher: [
    "/((?!.*\\.(?:[\\w]+)$|_next).*)", // no captures; skips assets & _next/*
    "/",
    "/(api|trpc)(.*)",
  ],
};
