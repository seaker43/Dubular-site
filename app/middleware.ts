import { NextResponse } from "next/server";
export function middleware() {
  const res = NextResponse.next();
  res.headers.set("x-worker", "dubular-beta");
  return res;
}
export const config = { matcher: "/:path*" };
