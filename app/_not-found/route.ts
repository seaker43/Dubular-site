export const runtime = 'edge';
export function GET() {
  return new Response(
    '<!doctype html><meta charset="utf-8"><title>404</title><div style="display:flex;align-items:center;justify-content:center;min-height:100vh;font:16px system-ui,sans-serif;text-align:center">Page not found</div>',
    { status: 404, headers: { 'content-type': 'text/html; charset=utf-8' } }
  );
}
