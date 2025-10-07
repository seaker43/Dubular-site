export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = auth();
  return new Response(JSON.stringify({ userId }), {
    headers: { 'content-type': 'application/json' },
  });
}
