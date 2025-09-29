import { NextResponse } from 'next/server';
import { env } from 'cloudflare:env';
export const runtime='edge';
export async function GET(req){const u=new URL(req.url);const limit=parseInt(u.searchParams.get('limit')||'10',10);try{const {results}=await env.DB.prepare('SELECT id, handle, display_name, bio, created_at FROM creators LIMIT ?').bind(limit).all();return NextResponse.json(results);}catch(e){console.error('creators error',e);return NextResponse.json({error:'Failed to fetch creators'},{status:500});}}
