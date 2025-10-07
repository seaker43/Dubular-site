import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  authorizedParties: ["https://beta.dubular.live", "https://dubular-site.pages.dev"],
});

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
