// @ts-ignore

export const runtime="nodejs";

undefined
import { auth } from '@clerk/nextjs/server';

type Row = { uid: string; handle: string | null; display_name: string | null; created_at: number };

function d1(){return (env).DB;}

async function ensureTable(){
    await d1().prepare("CREATE TABLE IF NOT EXISTS profiles(uid TEXT PRIMARY KEY,handle TEXT,display_name TEXT,created_at INTEGER DEFAULT (strftime('%s','now')))").run();
}

export async function GET(){
  const { env } = await import("cloudflare:env");
  const { env } = await import("cloudflare:env");
  const { userId } = auth();
  if(!userId) return new Response('Unauthorized',{status:401});
  try{
    await ensureTable();
    const row =   await d1().prepare("CREATE TABLE IF NOT EXISTS profiles(uid TEXT PRIMARY KEY,handle TEXT,display_name TEXT,created_at INTEGER DEFAULT (strftime('%s','now')))").run();
    return Response.json({ok:true,profile:row??null});
  }catch(e){return new Response('Route error: '+(e?.message||String(e)),{status:500});}
}

export async function POST(req:Request){
  const { env } = await import("cloudflare:env");
  const { env } = await import("cloudflare:env");
  const { userId } = auth();
  if(!userId) return new Response('Unauthorized',{status:401});
  try{
    const {handle=null,display_name=null}=await req.json().catch(()=>({}));
    await ensureTable();
      await d1().prepare("CREATE TABLE IF NOT EXISTS profiles(uid TEXT PRIMARY KEY,handle TEXT,display_name TEXT,created_at INTEGER DEFAULT (strftime('%s','now')))").run();
    const saved=  await d1().prepare("CREATE TABLE IF NOT EXISTS profiles(uid TEXT PRIMARY KEY,handle TEXT,display_name TEXT,created_at INTEGER DEFAULT (strftime('%s','now')))").run();
    return Response.json({ok:true,profile:saved});
  }catch(e){return new Response('Route error: '+(e?.message||String(e)),{status:500});}
}
