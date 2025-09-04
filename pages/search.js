import Head from "next/head";
import { useMemo, useState } from "react";

const DEMO = [
  { id:"s1", title:"AI Coding Jam",       tags:["coding","synthwave"], viewers:8420, liked:2310, hours:12, live:true },
  { id:"s2", title:"Lo-Fi Study Session", tags:["lofi","chill"],        viewers:3920, liked:1040, hours:34, live:true },
  { id:"s3", title:"Night Raid Tactics",  tags:["fps","tactics"],       viewers:12150, liked:5400, hours:57, live:true },
  { id:"s4", title:"Street Battle 6",     tags:["fighter","tourney"],    viewers:740, liked:230, hours:4, live:false },
  { id:"s5", title:"Guitar & Coffee",     tags:["music","acoustic"],     viewers:1810, liked:630, hours:22, live:true },
];

export default function SearchPage(){
  const [q,setQ] = useState("");
  const [sort,setSort] = useState("viewers");

  const rows = useMemo(()=>{
    const needle = q.trim().toLowerCase();
    let r = DEMO.filter(x =>
      x.title.toLowerCase().includes(needle) ||
      x.tags.join(" ").toLowerCase().includes(needle)
    );
    r.sort((a,b)=> (b[sort]??0)-(a[sort]??0));
    return r;
  },[q,sort]);

  return (
    <>
      <Head><title>Search • Dubular</title></Head>
      <section style={{padding:"14px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10, margin:"6px 4px 12px"}}>
          <h1 style={{margin:0, fontSize:22, color:"#7fffea"}}>Search</h1>
          <div style={{flex:1,height:2, background:"linear-gradient(90deg, rgba(0,255,220,.3), rgba(0,200,255,0))"}}/>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1fr auto", gap:10, marginBottom:12}}>
          <div style={{
            display:"flex", alignItems:"center", gap:8,
            background:"rgba(0,30,36,.85)", border:"1px solid rgba(0,255,220,.14)",
            borderRadius:14, padding:"10px 12px", boxShadow:"inset 0 0 20px rgba(0,255,220,.07)"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9fe9e0" strokeWidth="2"/><path d="M21 21l-3.5-3.5" stroke="#9fe9e0" strokeWidth="2" strokeLinecap="round"/></svg>
            <input
              value={q} onChange={e=>setQ(e.target.value)}
              placeholder="Search streams, tags…"
              style={{
                flex:1, background:"transparent", border:"none", outline:"none",
                color:"#d9fffb", fontSize:16
              }}/>
          </div>
          <select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort"
            style={{
              background:"rgba(0,30,36,.85)", color:"#cffff8", border:"1px solid rgba(0,255,220,.14)",
              borderRadius:12, padding:"10px 12px", fontSize:14
            }}>
            <option value="viewers">Most watched</option>
            <option value="liked">Most liked</option>
            <option value="hours">Biggest grinders</option>
          </select>
        </div>

        <div style={{display:"grid", gap:12}}>
          {rows.map(row=>(
            <article key={row.id} style={{
              display:"grid", gridTemplateColumns:"120px 1fr", gap:12,
              background:"radial-gradient(65% 65% at 50% 45%, rgba(0,255,220,.06), rgba(0,20,30,.92))",
              border:"1px solid rgba(0,255,220,.12)", borderRadius:18, padding:10,
              boxShadow:"inset 0 0 36px rgba(0,200,255,.06)"
            }}>
              <div style={{borderRadius:12, background:"#001820", height:76, position:"relative", overflow:"hidden"}}>
                <div className="eq" style={{
                  position:"absolute", bottom:8, left:8, display:"flex", gap:2, opacity:.9
                }}>
                  {[6,10,8,12,7].map((h,i)=><span key={i} style={{
                    width:3, height:h*4, background:"linear-gradient(180deg,#18e27a,#34d399)",
                    borderRadius:2, display:"inline-block", animation:`b${i} 1.2s ease-in-out ${i*0.08}s infinite alternate`
                  }}/>)}
                </div>
              </div>
              <div>
                <div style={{display:"flex", alignItems:"center", gap:8}}>
                  {row.live && <span style={{
                    fontSize:11, fontWeight:800, color:"#001318", background:"linear-gradient(90deg,#34d399,#18e27a)",
                    padding:"3px 7px", borderRadius:999, boxShadow:"0 0 12px rgba(0,255,200,.35)"
                  }}>LIVE</span>}
                  <h3 style={{margin:"2px 0 0", color:"#d9fffb"}}>{row.title}</h3>
                </div>
                <div style={{fontSize:13, color:"#9fe9e0", opacity:.9, marginTop:2}}>
                  {row.tags.join(" • ")}
                </div>
                <div style={{display:"flex", gap:14, marginTop:8, fontSize:12, color:"#b8fff6"}}>
                  <span>👀 {row.viewers.toLocaleString()}</span>
                  <span>❤️ {row.liked.toLocaleString()}</span>
                  <span>⏱ {row.hours}h</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes b0{from{transform:scaleY(.4)}to{transform:scaleY(1)}}
        @keyframes b1{from{transform:scaleY(.3)}to{transform:scaleY(1)}}
        @keyframes b2{from{transform:scaleY(.5)}to{transform:scaleY(1)}}
        @keyframes b3{from{transform:scaleY(.2)}to{transform:scaleY(1)}}
        @keyframes b4{from{transform:scaleY(.35)}to{transform:scaleY(1)}}
      `}</style>
    </>
  );
}
