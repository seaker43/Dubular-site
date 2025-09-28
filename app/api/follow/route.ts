export const runtime = "edge";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const creator_id = searchParams.get("creator_id");
  const follower_id = searchParams.get("follower_id");

  if (!creator_id || !follower_id) {
    return NextResponse.json({
      ok: true,
      message: "No params given, returning default",
      followers: []
    });
  }

  return NextResponse.json({
    ok: true,
    creator_id,
    follower_id,
    status: "following"
  });
}
