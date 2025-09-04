import Head from "next/head";
import { useMemo, useState } from "react";
import "../styles/wires.css";

const mock = {
  watched: [
    ["@Kumo", "Most Watched", "1.28M hrs"],
    ["@Sable", "Most Watched", "1.02M hrs"],
    ["@Nova",  "Most Watched", "986k hrs"],
    ["@Ryuu",  "Most Watched", "842k hrs"],
  ],
  liked: [
    ["@Kumo", "Most Liked", "1.9M ♥"],
    ["@Pixel", "Most Liked", "1.7M ♥"],
    ["@Aria", "Most Liked", "1.5M ♥"],
    ["@Ryuu", "Most Liked", "1.4M ♥"],
  ],
  grinders: [
    ["@Ryuu",   "Biggest Grinder (7d)", "118h"],
    ["@Kumo",   "Biggest Grinder (7d)", "112h"],
    ["@Sable",  "Biggest Grinder (7d)", "104h"],
    ["@Nova",   "Biggest Grinder (7d)", "99h"],
  ]
};

export default function RanksPage(){
  const [tab,setTab]=useState("watched");
  const data = useMemo(()=>mock[tab]||[],[tab]);

  return (
    <>
      <Head><title>Leaderboard — Dubular</title></Head>
      <main className="page" role="main">
        <h1 className="h1">Leaderboard</h1>
        <div className="sub">Top creators across the network.</div>

        <div className="tabs">
          {[
            ["watched","Most Watched"],
            ["liked","Most Liked"],
            ["grinders","Biggest Grinders (7d)"],
          ].map(([key,label])=>(
            <button
              key={key}
              className={`badge tab ${tab===key?"active":""}`}
              onClick={()=>setTab(key)}
              aria-pressed={tab===key}
            >{label}</button>
          ))}
        </div>

        <section className="card" aria-live="polite">
          <div className="list" role="list">
            {data.map(([name, title, metric], i)=>(
              <div className="item" role="listitem" key={name+i}>
                <div className="row" style={{gap:10}}>
                  <span className="rank">{i+1}</span>
                  <div>
                    <div className="name">{name}</div>
                    <div className="kbd">{title}</div>
                  </div>
                </div>
                <div className="metric">{metric}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Loading skeleton row (wire) */}
        <div className="skel" style={{marginTop:12}}></div>
      </main>
    </>
  );
}
