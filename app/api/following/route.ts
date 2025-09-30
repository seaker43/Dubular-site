import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
export const runtime="edge";
type Row={id:number};type D1=any;
async function resolveId(qs:URLSearchParams,db:D1){const id=qs.get("creator_id");if(id&&/^[0-9]+$/.test(id))return +id;const h=qs.get("handle");if(!h)return null;const r=await db.prepare("SELECT id FROM creators WHERE handle=?").bind(h).first<Row>();return r?.id??null}
export async function GET(req:Request){try{const db=(getRequestContext().env as any).DB as D1;const url=new URL(req.url);const creatorId=await resolveId(url.searchParams,db);if(!creatorId)return NextResponse.json({ok:false,error:"missing query: pass ?creator_id=… or ?handle=…"}, {status:400});const {results}=await db.prepare(`SELECT c.handle AS following_handle, c.display_name AS following_name, f.created_at FROM follows f JOIN creators c ON c.id=f.following_id WHERE f.follower_id=? ORDER BY f.created_at DESC LIMIT 100`).bind(creatorId).all();return NextResponse.json({ok:true, following:results??[]})}catch(e:any){console.error("API /following:",e);return NextResponse.json({ok:false,error:e?.message??String(e)},{status:500})}}
