export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export async function GET() {
  const env = (getRequestContext().env as any) || {};
  return NextResponse.json({ envKeys: Object.keys(env).sort() });
}
