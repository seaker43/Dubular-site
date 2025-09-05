import React, { useRef } from "react";
export default function HorizontalCarousel({ title, items = [] }) {
  const trackRef = useRef(null);
  const scrollBy = (dx) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  return (
    <section className="row">
      <div className="row-head">
        <h2 className="row-title">{title}</h2>
        <div className="row-ctrls">
          <button className="pill" onClick={() => scrollBy(-320)}>‹</button>
          <button className="pill" onClick={() => scrollBy(320)}>›</button>
        </div>
      </div>
      <div className="cards" ref={trackRef}>
        {items.map((it) => (
          <div key={it.id} className="card">
            <div className="thumb">
              <img src={it.thumb} alt={it.title} loading="lazy" />
              {it.live && <span className="live">LIVE</span>}
            </div>
            <div className="meta">
              <div className="title">{it.title}</div>
              <div className="sub">{it.category} • {it.tagline}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
