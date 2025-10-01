import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/search", "/rank", "/streams", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
