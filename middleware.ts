import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/account", "/settings/:path*", "/u/me", "/api/:path*"],
};
