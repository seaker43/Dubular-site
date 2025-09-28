import { NextResponse } from "next/server";
import { db } from "@/lib/kv";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const creatorId = Number(searchParams.get("creator_id"));
    const followerId = Number(searchParams.get("follower_id"));

    let rows;
    if (creatorId) {
      rows = db().prepare("SELECT * FROM follows WHERE creator_id = ?").bind(creatorId).all();
    } else if (followerId) {
      rows = db().prepare("SELECT * FROM follows WHERE follower_id = ?").bind(followerId).all();
    } else {
      return NextResponse.json({ error: "Missing query param" }, { status: 400 });
    }

    return NextResponse.json({ ok: true, rows });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "GET failed" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number") {
      return NextResponse.json({ error: "IDs must be numbers" }, { status: 400 });
    }
    const r = await db().prepare("INSERT INTO follows (follower_id, creator_id) VALUES (?, ?)").bind(follower_id, creator_id).run();
    return NextResponse.json({ ok: true, lastRowId: r.meta.last_row_id });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "POST failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { follower_id, creator_id } = await req.json();
    if (typeof follower_id !== "number" || typeof creator_id !== "number") {
      return NextResponse.json({ error: "IDs must be numbers" }, { status: 400 });
    }
    const r = await db().prepare("DELETE FROM follows WHERE follower_id = ? AND creator_id = ?").bind(follower_id, creator_id).run();
    return NextResponse.json({ ok: true, changes: r.meta.changes });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "DELETE failed" }, { status: 500 });
  }
}
