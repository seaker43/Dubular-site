export const runtime = 'edge';

export async function GET() {
  return new Response(
    '<!doctype html><title>Not Found</title><h1>404</h1><p>This page could not be found.</p>',
    { status: 404, headers: { 'content-type': 'text/html; charset=utf-8' } }
  );
}
