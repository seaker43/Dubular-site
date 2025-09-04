import Head from "next/head";
import { useMemo, useState } from "react";

const DATA = [
  { id:"u1", name:"NeonCoder",       watched:12150, liked:5400, hours:57 },
  { id:"u2", name:"LoFiLyn",         watched:8420,  liked:2310, hours:34 },
  { id:"u3", name:"TacticFox",       watched:6210,  liked:1802, hours:49 },
  { id:"u4", name:"BeatBarista",     watched:1810,  liked:630,  hours:22 },
  { id:"u5", name:"ArcadeNexus",     watched:740,   liked:230,  hours:11 },
];

const TABS = [
  { key:"watched", label:"Most Watched" },
  { key:"liked",   label:"Most Liked" },
  { key:"hours",   label:"Biggest Grinders" },
];

export default function RanksPage(){
  const [tab,setTab] = useState("watched");

  const rows = useMemo(()=>{
    const r=[...DATA];
    r.sort((a,b)=> (b[tab]??0)-(a[tab]??0));
    return r;
  },[tab]);

  return (
    <>
      <Head><title>Leaderboard • Dubular</title></Head>
      <section style={{padding:"14px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10, margin:"6px 4px 12px"}}>
          <h1 style={{margin:0, fontSize:22, color:"#7fffea"}}>Leaderboard</h1>
          <div style={{flex:1,height:2, background:"linear-gradient(90deg, rgba(0,255,220,.3), rgba(0,200,255,0))"}}/>
        </div>

        <div style={{display:"flex", gap:8, margin:"4px 0 14px"}}>
          {TABS.map(t=>(
            <button key={t.key} onClick={()=>setTab(t.key)} aria-pressed={tab===t.key}
              style={{
                cursor:"pointer",
                padding:"8px 12px", borderRadius:999,
                border:"1px solid rgba(0,255,220,.18)",
                background: tab===t.key ? "linear-gradient(90deg,#18e27a,#34d399)" : "rgba(0,30,36,.7)",
                color: tab===t.key ? "#001318" : "#cafffb",
                fontWeight:800, letterSpacing:.2, boxShadow: tab===t.key ? "0 0 16px rgba(0,255,220,.35)" : "none"
              }}>
              {t.label}
            </button>
          ))}
        </div>

        <div style={{
          background:"radial-gradient(70% 70% at 50% 40%, rgba(0,255,220,.06), rgba(0,20,30,.92))",
          border:"1px solid rgba(0,255,220,.12)", borderRadius:18, overflow:"hidden"
        }}>
          <table style={{width:"100%", borderCollapse:"separate", borderSpacing:0}}>
            <thead>
              <tr style={{textAlign:"left", color:"#98efe6", fontSize:13}}>
                <th style={{padding:"12px 14px"}}>#</th>
                <th style={{padding:"12px 6px"}}>Streamer</th>
                <th style={{padding:"12px 6px"}}>Watched</th>
                <th style={{padding:"12px 6px"}}>Liked</th>
                <th style={{padding:"12px 14px"}}>Hours/Wk</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,i)=>(
                <tr key={r.id} style={{
                  color:"#d9fffb",
                  background: i%2 ? "rgba(0,30,36,.55)" : "rgba(0,30,36,.35)"
                }}>
                  <td style={{padding:"12px 14px", fontWeight:800, color:"#7fffea"}}>{i+1}</td>
                  <td style={{padding:"12px 6px"}}>{r.name}</td>
                  <td style={{padding:"12px 6px"}}>{r.watched.toLocaleString()}</td>
                  <td style={{padding:"12px 6px"}}>{r.liked.toLocaleString()}</td>
                  <td style={{padding:"12px 14px"}}>{r.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
