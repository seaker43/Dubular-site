export const runtime='edge';
export const dynamic='force-dynamic';

function strip(p){return p.replace(/^\/clerk(?=\/|$)/,'');}

async function proxy(req){
  const u=new URL(req.url);
  const path=strip(u.pathname)+u.search;
  const upstream='https://clerk.dubular.live'+path;
  const res=await fetch(upstream,{method:req.method,headers:req.headers,body:(req.method==='GET'||req.method==='HEAD')?undefined:req.body});
  return new Response(res.body,{status:res.status,headers:res.headers});
}

export const GET=proxy,POST=proxy,PUT=proxy,DELETE=proxy,PATCH=proxy,OPTIONS=proxy,HEAD=proxy;
