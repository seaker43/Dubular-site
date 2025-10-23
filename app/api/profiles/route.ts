export const runtime = 'edge';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { uid, handle, display_name } = await req.json();
    const _uid =
      uid ??
      (globalThis.crypto?.randomUUID
        ? globalThis.crypto.randomUUID()
        : Math.random().toString(36).slice(2));
    const result = await (globalThis as any).DB.prepare(
      "INSERT INTO profiles (uid, handle, display_name) VALUES (?1, ?2, ?3)",
    )
      .bind(_uid, handle, display_name)
      .run();
    return NextResponse.json({ success: true, result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const rows = await (globalThis as any).DB.prepare(
      "SELECT uid, handle, display_name, created_at FROM profiles",
    ).all();
    return NextResponse.json(rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
