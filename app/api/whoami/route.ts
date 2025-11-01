// @ts-ignore

export const runtime="nodejs";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { env } = await import("cloudflare:env");
  const { env } = await import("cloudflare:env");
  const { userId, sessionId } = auth();
  if (!userId) return Response.json({ ok: false, reason: "no session cookie" });
  return Response.json({ ok: true, userId, sessionId });
}
