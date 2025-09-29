export const runtime = 'edge';
export async function GET(req: Request, ctx: { env: { DB: D1Database } }) {
  const url = new URL(req.url);
  const limit = Number(url.searchParams.get('limit') ?? '10');
  try {
    const { results } = await ctx.env.DB
      .prepare('SELECT id, handle, display_name, bio, created_at FROM creators LIMIT ?')
      .bind(limit)
      .all();
    return Response.json(results);
  } catch (e) {
    console.error('creators error', e);
    return Response.json({ error: 'Failed to fetch creators' }, { status: 500 });
  }
}
