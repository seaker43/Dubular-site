import { NextRequest, NextResponse } from "next/server";
export const config = { matcher: ["/((?!_next/|favicon.ico|.*\\.(png|jpg|jpeg|svg|gif|webp|ico|css|js|map)).*)"] };
export default function mw(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("Cache-Control","no-store, max-age=0");
  res.headers.set("CDN-Cache-Control","no-store");
  res.headers.set("Vary","*");
  return res;
}
