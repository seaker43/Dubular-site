export const runtime = 'edge';
export async function GET() {
  return new Response(
    '<!doctype html><meta charset="utf-8"><title>404</title><h1>Page not found</h1>',
    { status: 404, headers: { 'content-type': 'text/html; charset=utf-8' } }
  );
}
