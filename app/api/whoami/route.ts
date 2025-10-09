import { auth } from "@clerk/nextjs/server";

export const runtime = "edge";

export async function GET() {
  const { userId, sessionId } = auth();
  if (!userId) return Response.json({ ok: false, reason: "no session cookie" });
  return Response.json({ ok: true, userId, sessionId });
}
