export const runtime = "edge";
import { getDB } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const db = (globalThis as any).DB;

    const { results } = await db
      .prepare("SELECT id, handle, display_name, bio, created_at FROM creators LIMIT ?")
      .bind(limit)
      .all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch creators" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
