import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/","/search","/rank","/streams","/sign-in(.*)","/sign-up(.*)"],
});

export const config = { matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"] };
