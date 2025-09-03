import React from "react";

export default function StreamCard({ title, seed, live=true }) {
  const img = `https://picsum.photos/seed/${encodeURIComponent(seed || title)}/800/500`;
  return (
    <a className="streamCard" href="#" onClick={e=>e.preventDefault()}>
      {live && <span className="livePill">LIVE</span>}
      <img className="streamImg" src={img} alt={title} loading="lazy" />
      <div className="cardMeta">
        <div className="cardTitle">{title}</div>
      </div>
    </a>
  );
}
