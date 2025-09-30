import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
export const runtime="edge";
const db=()=> (getRequestContext().env).DB;
const idByHandle=async(h)=>{const r=await db().prepare("SELECT id FROM creators WHERE handle=?").bind(h).first();return r?.id??null};

export async function GET(req){try{const u=new URL(req.url);const h=u.searchParams.get("handle");const s=u.searchParams.get("creator_id");let id=null;if(s&&/^\d+$/.test(s)) id=+s; else if(h) id=await idByHandle(h); if(!id) return NextResponse.json({ok:false,error:"missing query: pass ?creator_id=… or ?handle=…"}, {status:400}); const {results}=await db().prepare(`SELECT c.handle AS follower_handle,c.display_name AS follower_name,f.created_at FROM follows f JOIN creators c ON c.id=f.follower_id WHERE f.following_id=? ORDER BY f.created_at DESC LIMIT 100`).bind(id).all(); return NextResponse.json({ok:true,followers:results??[]})}catch(e){console.error("API /followers",e);return NextResponse.json({ok:false,error:e?.message??String(e)},{status:500})}}
