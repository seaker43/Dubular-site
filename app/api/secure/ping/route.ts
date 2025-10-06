export const runtime = 'edge';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  return Response.json({ ok: true, userId, ts: Date.now() });
}
