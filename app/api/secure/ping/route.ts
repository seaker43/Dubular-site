// @ts-ignore

export const runtime="nodejs";
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { env } = await import("cloudflare:env");

const { userId } = auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  return Response.json({ ok: true, userId, ts: Date.now() });
}
