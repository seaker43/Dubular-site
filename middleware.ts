import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  authorizedParties: ["https://beta.dubular.live","https://dubular-site.pages.dev"],
  publicRoutes: ["/","/api/diag/keys","/api/whoami","/api/health","/api/ping","/robots.txt","/sitemap.xml"],
});

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
