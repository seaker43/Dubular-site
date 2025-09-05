export default function CategoryRow({ title, items }) {
  return (
    <div className="category-row">
      <h2 className="category-title">{title}</h2>
      <div className="scroll-row">
        {items.map((item, i) => (
          <div key={i} className="card">
            <div className="thumb-wrap">
              <img src={item.thumb} alt={item.title} className="thumb"/>
              {item.live && <span className="live-badge">LIVE</span>}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-tags">{item.tags.join(" • ")}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .category-title { color:#18e27a; font-size:1.3rem; font-weight:600; margin:1rem 0; text-shadow:0 0 10px #18e27a; }
        .scroll-row { display:flex; overflow-x:auto; gap:1rem; padding-bottom:0.5rem; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; }
        .card { flex:0 0 auto; min-width:180px; max-width:200px; background:#111; border-radius:12px; padding:0.5rem; scroll-snap-align:start; box-shadow:0 0 12px rgba(24,226,122,0.4); }
        .thumb-wrap { position:relative; }
        .thumb { width:100%; border-radius:8px; }
        .live-badge { position:absolute; top:8px; left:8px; background:#18e27a; color:#000; font-size:0.7rem; padding:2px 6px; border-radius:6px; font-weight:600; box-shadow:0 0 8px #18e27a; }
        .card-title { color:#fff; font-size:1rem; margin:0.5rem 0 0.25rem; }
        .card-tags { color:#aaa; font-size:0.8rem; }
      `}</style>
    </div>
  );
}
