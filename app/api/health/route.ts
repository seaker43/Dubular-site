// @ts-ignore
import { env } from 'cloudflare:env'
export const runtime="nodejs";
import { NextResponse } from 'next/server';

export async function GET() {
  const envs = {
    FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
    SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    AFTER_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    AFTER_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  };
  return NextResponse.json({ ok: true, route: '/api/health', envs }, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    }
  });
}
