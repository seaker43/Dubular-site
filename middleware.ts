import { NextResponse } from 'next/server';

export const config = { matcher: ['/api/:path*'] };

// 60 requests per 60s per IP (in-memory, per instance)
const WINDOW_MS = 60_000;
const LIMIT = 60;
type Bucket = Map<string, number[]>;

const store: Bucket =
  (globalThis as any).__rl_store || ((globalThis as any).__rl_store = new Map());

export default function middleware(req: Request) {
  const ipHeader =
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-forwarded-for') ||
    'unknown';
  const ip = ipHeader.split(',')[0].trim();

  const now = Date.now();
  const hits = store.get(ip)?.filter((t) => now - t < WINDOW_MS) ?? [];
  hits.push(now);
  store.set(ip, hits);

  if (hits.length > LIMIT) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }
  return NextResponse.next();
}
