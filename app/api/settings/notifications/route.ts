export const runtime = 'edge';
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  // In a real app you'd persist this to your DB:
  const body = await req.json().catch(() => ({}));
  return new Response(JSON.stringify({ ok: true, ...body }), {
    headers: { "content-type": "application/json" },
  });
}
