export const runtime='edge';
import { NextResponse } from 'next/server';
export async function GET(req: Request){const q=new URL(req.url).searchParams.get('q')||'';return NextResponse.json({ q, results:[] });}
