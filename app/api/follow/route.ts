export const runtime = "edge";
import { NextResponse } from "next/server";

const bad = (m: string) => NextResponse.json({ error: m }, { status: 400 });

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const creator_id = searchParams.get("creator_id");
  const follower_id = searchParams.get("follower_id");

  if (!creator_id && !follower_id)
    return bad("creator_id or follower_id required");

  return NextResponse.json({ creator_id, follower_id, followers: [], creators: [] });
}

export async function POST(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number")
      return bad("follower_id and creator_id must be numbers");
    return NextResponse.json({ ok: true, action: "followed", follower_id, creator_id });
  } catch {
    return bad("invalid JSON");
  }
}

export async function DELETE(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number")
      return bad("follower_id and creator_id must be numbers");
    return NextResponse.json({ ok: true, action: "unfollowed", follower_id, creator_id });
  } catch {
    return bad("invalid JSON");
  }
}
