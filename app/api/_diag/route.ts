export const runtime = 'edge';

import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const env: any = env || {};
  const hasDB = !!env.DB;
  let d1_ok = false, table_ok = false, sample:any = null, d1_err: string | null = null;

  if (hasDB) {
    try {
      // basic SELECT to prove the binding works
      await env.DB.prepare('SELECT 1 as ok').first();
      d1_ok = true;
      // check (or create) profiles table shape quickly
      await env.DB.exec(`CREATE TABLE IF NOT EXISTS profiles(
        user_id TEXT PRIMARY KEY,
        handle TEXT UNIQUE,
        display_name TEXT,
        bio TEXT,
        avatar_url TEXT,
        updated_at INTEGER
      );`);
      table_ok = true;
      sample = await env.DB.prepare('SELECT user_id, handle FROM profiles LIMIT 1').first();
    } catch (e:any) { d1_err = String(e?.message || e); }
  }

  const { userId } = auth();

  return NextResponse.json({
    edge_runtime: true,
    env_keys: Object.keys(env),
    hasDB, d1_ok, table_ok, d1_err, sample,
    auth: { userId: userId ?? null }
  });
}
