import { NextRequest, NextResponse } from "next/server";

// Match everything; we'll early-return for assets
export const config = { matcher: "/:path*" };

export default function mw(req: NextRequest) {
  const p = req.nextUrl.pathname;
  // Skip static/asset paths
  if (
    p.startsWith("/_next") ||
    p === "/favicon.ico" ||
    /\.(png|jpg|jpeg|svg|gif|webp|ico|css|js|map)$/.test(p)
  ) {
    return NextResponse.next();
  }
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "no-store, max-age=0");
  res.headers.set("CDN-Cache-Control", "no-store");
  res.headers.set("Vary", "*");
  return res;
}
