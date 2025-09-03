import React from "react";
import StreamCard from "./StreamCard";

export default function CategoryRow({ title, items=[] }) {
  const list = items.length ? items : Array.from({length:6}).map((_,i)=>({
    title:`Night Raid Tactics #${i+1}`,
    seed:`${title}-${i+1}`
  }));
  return (
    <section className="row">
      <div className="rowHeader">
        <h2 className="rowTitle">{title}</h2>
        <button className="seeAllBtn" type="button" onClick={()=>{}}>See all ▸</button>
      </div>
      <div className="cardsScroller">
        {list.map((it,idx)=>(
          <StreamCard key={idx} title={it.title} seed={it.seed} />
        ))}
      </div>
    </section>
  );
}
