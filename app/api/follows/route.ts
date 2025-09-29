import { getDB } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Number(searchParams.get("limit") || 10);

    const db = getDB();
    const { results } = await db
      .prepare("SELECT id, follower_id, creator_id, created_at FROM follows LIMIT ?")
      .bind(limit)
      .all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("Error fetching follows:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch follows" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}

export const runtime = 'edge';
