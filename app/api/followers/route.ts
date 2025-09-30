import { NextResponse } from "next/server";
export const runtime="edge";
type Row={id:number};type D1Database=any;
async function resolveId(qs:URLSearchParams,db:D1Database){const id=qs.get("creator_id");if(id&&/^[0-9]+$/.test(id))return +id;const h=qs.get("handle");if(!h)return null;const r=await db.prepare("SELECT id FROM creators WHERE handle=?").bind(h).first<Row>();return r?.id??null;}
export async function GET(req:Request,context:any){try{const db=context.env.DB as D1Database;const url=new URL(req.url);const creatorId=await resolveId(url.searchParams,db);if(!creatorId)return NextResponse.json({ok:false,error:"missing query: pass ?creator_id=… or ?handle=…"},{status:400});const {results}=await db.prepare(`SELECT c.handle AS follower_handle, c.display_name AS follower_name, f.created_at
 FROM follows f JOIN creators c ON c.id=f.follower_id
 WHERE f.following_id=? ORDER BY f.created_at DESC LIMIT 100`).bind(creatorId).all();return NextResponse.json({ok:true,[name]:results??[]});}catch(e:any){console.error("API /followers:",e);return NextResponse.json({ok:false,error:e?.message??String(e)},{status:500});}}