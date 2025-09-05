export default function CategoryRow({ title, items }) {
  return (
    <section className="cat-row">
      <h2 className="cat-title">{title}</h2>
      <div className="rail">
        {items.map((it, idx) => (
          <div key={idx} className="card">
            <div className="thumb" style={{backgroundImage:`url(${it.thumb||"/demo/placeholder.jpg"})`}}></div>
            <div className="meta">
              {it.live && <span className="live-badge">LIVE</span>}
              <div className="name">{it.title}</div>
              <div className="tags">{(it.tags||[]).join(" • ")}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
