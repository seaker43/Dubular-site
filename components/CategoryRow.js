export default function CategoryRow({ title, items }) {
  return (
    <section className="cat-row">
      <h2 className="cat-title">{title}</h2>
      <div className="rail">
        {items.map((it, idx) => (
          <a key={idx} className="card" href="#">
            <div className="thumb" style={{backgroundImage:`url(${it.thumb})`}}></div>
            <div className="meta">
              {it.live && <span className="live-badge">LIVE</span>}
              <div className="name">{it.title}</div>
              <div className="tags">{(it.tags||[]).join(" • ")}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
