export const runtime='edge';
export const dynamic='force-dynamic';

import { getAuth } from '@clerk/nextjs/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

type Body={dark?:boolean;email?:boolean;push?:boolean};

export async function GET(req:Request){
  const {userId}=getAuth(req);
  if(!userId)return new Response('Unauthorized',{status:401});
  const env:any=getRequestContext().env;
  const row=await env.DB.prepare('SELECT dark,email_notifs,push_notifs FROM user_settings WHERE user_id=?').bind(userId).first<{dark?:number;email_notifs?:number;push_notifs?:number}>();
  return Response.json({dark:!!row?.dark,email:!!row?.email_notifs,push:!!row?.push_notifs});
}

export async function POST(req:Request){
  const {userId}=getAuth(req);
  if(!userId)return new Response('Unauthorized',{status:401});
  const {dark=false,email=true,push=false}=(await req.json())as Body;
  const env:any=getRequestContext().env;
  const now=Date.now();
  await env.DB.prepare('INSERT INTO user_settings (user_id,dark,email_notifs,push_notifs,updated_at) VALUES (?,?,?,?,?) ON CONFLICT(user_id) DO UPDATE SET dark=excluded.dark,email_notifs=excluded.email_notifs,push_notifs=excluded.push_notifs,updated_at=excluded.updated_at').bind(userId,dark?1:0,email?1:0,push?1:0,now).run();
  return Response.json({ok:true});
}
