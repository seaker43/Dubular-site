export const runtime='edge';
export const dynamic='force-dynamic';
async function proxy(req){
  const u=new URL(req.url);
  const upstream=`https://clerk.dubular.live${u.pathname}${u.search}`;
  const res=await fetch(upstream,{method:req.method,headers:req.headers,body:req.method==='GET'||req.method==='HEAD'?undefined:req.body});
  return new Response(res.body,{status:res.status,headers:res.headers});
}
export const GET=proxy,POST=proxy,PUT=proxy,DELETE=proxy,PATCH=proxy,OPTIONS=proxy,HEAD=proxy;
