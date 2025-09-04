import React from "react";

function Glow({style}) {
  return <div style={{
    position:"absolute", inset:-20, borderRadius:24,
    background:"radial-gradient(60% 60% at 50% 40%, rgba(0,255,200,0.10), rgba(0,255,200,0) 60%)",
    filter:"blur(12px)", pointerEvents:"none", ...style
  }}/>;
}

export function LivePill() {
  return (
    <div style={{
      display:"inline-flex", alignItems:"center", gap:8,
      background:"rgba(0,255,200,0.10)", border:"1px solid rgba(0,255,200,0.25)",
      padding:"6px 10px", borderRadius:999, fontWeight:700, letterSpacing:1,
      color:"#7fffea", fontSize:12
    }}>
      <span style={{
        width:8, height:8, borderRadius:999,
        background:"linear-gradient(180deg,#00F5FF,#00FFA3)",
        boxShadow:"0 0 8px #00ffd0", animation:"pulse 1.4s ease-in-out infinite"
      }}/>
      LIVE
      <style jsx>{`
        @keyframes pulse {
          0% { transform:scale(0.9); opacity:.8; }
          50% { transform:scale(1.15); opacity:1; }
          100% { transform:scale(0.9); opacity:.8; }
        }
      `}</style>
    </div>
  );
}

export function EQBars({bars=5,height=28}) {
  const items = Array.from({length:bars});
  return (
    <div style={{display:"flex", gap:6, alignItems:"flex-end", height}}>
      {items.map((_,i)=>(
        <div key={i} style={{
          width:6, background:"linear-gradient(180deg,#00F5FF,#00FFA3)",
          borderRadius:4, opacity:.85, animation:`eq${i} 1.1s ${i*0.08}s infinite ease-in-out`,
          boxShadow:"0 0 10px rgba(0,255,200,.5)"
        }}/>
      ))}
      <style jsx>{`
        ${items.map((_,i)=>`
          @keyframes eq${i}{
            0%,100%{height:20%}
            50%{height:${60+((i%3)*10)}%}
          }`).join("\n")}
      `}</style>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div style={{
      position:"relative", background:"linear-gradient(180deg,#0e1c1e 0%, #0b1314 100%)",
      border:"1px solid rgba(0,255,200,0.10)", borderRadius:20, padding:16, minHeight:180,
      display:"flex", flexDirection:"column", justifyContent:"space-between", overflow:"hidden"
    }}>
      <Glow/>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <LivePill/>
        <EQBars bars={7} height={24}/>
      </div>
      <div style={{
        height:14, width:"70%", borderRadius:6,
        background:"linear-gradient(90deg,rgba(0,255,200,.18),rgba(0,255,200,.06) 60%,rgba(0,255,200,.18))",
        backgroundSize:"200% 100%", animation:"shimmer 1.2s linear infinite"
      }}/>
      <style jsx>{`
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
      `}</style>
    </div>
  );
}

export default CardSkeleton;
