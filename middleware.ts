import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublic = createRouteMatcher([
  "/",
  "/search",
  "/rank",
  "/streams",
  "/sign-in(.*)",
  "/sign-up(.*)"
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublic(req)) auth().protect(); // Gate everything else
});

export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
