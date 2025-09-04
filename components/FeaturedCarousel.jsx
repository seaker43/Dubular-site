import React from "react";

const demo = [
  { id: "f1", title: "AI Coding Jam",      tags: ["coding","synthwave"],  src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "f2", title: "Lo-Fi Study Session",tags: ["lofi","chill"],        src: "https://www.w3schools.com/html/movie.mp4"    },
  { id: "f3", title: "Night Raid Tactics", tags: ["fps","tactics"],       src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export default function FeaturedCarousel(){
  return (
    <section style={{padding:"16px 14px 10px"}}>
      <div style={{display:"flex", alignItems:"center", gap:12, margin:"0 6px 10px"}}>
        <h2 style={{margin:0, fontSize:22, color:"#7fffea", textShadow:"0 0 12px rgba(0,255,220,.3)"}}>Featured Streamers</h2>
        <div style={{flex:1, height:2, background:"linear-gradient(90deg, rgba(0,255,220,.3), rgba(0,200,255,0))"}}/>
      </div>

      <div style={{
        display:"grid", gridAutoFlow:"column", gridAutoColumns:"85%",
        gap:16, overflowX:"auto", scrollSnapType:"x mandatory", padding:"2px 4px 12px"
      }}>
        {demo.map(card=>(
          <article key={card.id} style={{
            scrollSnapAlign:"start",
            borderRadius:20,
            background:"radial-gradient(65% 65% at 50% 45%, rgba(0,255,220,.08), rgba(0,20,30,.9))",
            border:"1px solid rgba(0,255,220,.12)",
            boxShadow:"inset 0 0 40px rgba(0,200,255,.08), 0 14px 48px rgba(0,0,0,.45)",
            padding:12
          }}>
            <div style={{position:"relative", borderRadius:16, overflow:"hidden", background:"#001820"}}>
              <video
                src={card.src}
                muted
                autoPlay
                loop
                playsInline
                style={{width:"100%", height:220, objectFit:"cover", display:"block"}}
              />
              <span style={{
                position:"absolute", top:10, left:10, padding:"4px 8px",
                borderRadius:999, fontSize:12, fontWeight:700,
                color:"#001318", background:"linear-gradient(90deg,#34d399,#18e27a)", boxShadow:"0 0 16px rgba(0,255,200,.35)"
              }}>LIVE</span>
            </div>
            <div style={{padding:"10px 6px 4px"}}>
              <div style={{fontSize:18, fontWeight:800, letterSpacing:.4, color:"#d9fffb"}}>{card.title}</div>
              <div style={{opacity:.8, fontSize:13, marginTop:4, color:"#9fe9e0"}}>{card.tags.join(" • ")}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
