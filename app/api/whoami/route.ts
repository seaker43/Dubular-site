export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import { auth, clerkClient } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';
import { authenticateRequest } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
  // Low-level check that returns failure reasons if any
  const ar = await authenticateRequest(req, {
    authorizedParties: ['https://beta.dubular.live','https://dubular-site.pages.dev'],
  });

  // Normal high-level API
  const { userId, sessionId } = auth();

  const body = {
    userId: userId ?? null,
    sessionId: sessionId ?? null,
    debug: {
      failureReason: (ar as any)?.failureReason ?? null,
      isSatellite: (ar as any)?.isSatellite ?? null,
      hasClientUat: req.cookies.get('__client_uat')?.value ? true : false,
      cookieDomainHint: process.env.CLERK_COOKIE_DOMAIN || null,
      host: req.headers.get('host'),
      origin: req.headers.get('origin'),
      referer: req.headers.get('referer'),
    },
  };

  return new Response(JSON.stringify(body), {
    headers: { 'content-type': 'application/json' },
  });
}
