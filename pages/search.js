import Head from "next/head";
import { useMemo, useState } from "react";
import "../styles/wires.css";

export default function SearchPage(){
  const [q,setQ] = useState("");
  const suggestions = useMemo(()=>[
    "lofi", "coding", "tactics", "retro", "synthwave", "IRL", "speedrun"
  ].filter(x=>x.includes(q.toLowerCase())).slice(0,6),[q]);

  return (
    <>
      <Head><title>Search — Dubular</title></Head>
      <main className="page" role="main">
        <h1 className="h1">Search</h1>
        <div className="sub">Find streams, creators and tags.</div>

        <div className="card" role="search" aria-label="Search streams">
          <input
            className="input"
            value={q}
            onChange={e=>setQ(e.target.value)}
            placeholder="Search creators, streams, or tags…"
            aria-label="Search"
          />
          <div className="row" style={{justifyContent:"space-between", marginTop:8}}>
            <span className="kbd">Tip: Try “coding synthwave”</span>
            {q && <span className="badge">Enter ↵ to search</span>}
          </div>
        </div>

        {/* Suggestions / quick results (static wire) */}
        <div className="card" style={{marginTop:14}}>
          <div className="row" style={{justifyContent:"space-between"}}>
            <div className="name">Quick Suggestions</div>
            <span className="badge">Beta</span>
          </div>
          <div className="list" role="list">
            {(q ? suggestions : ["coding","lofi","fps","music","tourney","tactics"]).map((t,i)=>(
              <div className="item" role="listitem" key={t+i}>
                <div className="row" style={{gap:10}}>
                  <span className="rank">{i+1}</span>
                  <span className="name">#{t}</span>
                </div>
                <span className="metric">~ {Math.round(Math.random()*900)+100} live</span>
              </div>
            ))}
          </div>
        </div>

        {/* Loading skeleton for real results */}
        <div className="sub" style={{marginTop:14}}>Results</div>
        <div className="skel"></div>
        <div className="skel"></div>
        <div className="skel"></div>
      </main>
    </>
  );
}
