export default function CategoryRow({ title, items=[] }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        <div className="section-rule" />
      </div>
      <div className="hscroll">
        {items.map((it,i)=>(
          <a key={i} className="card" href={it.href || '#'} aria-label={it.title}>
            {it.live && <span className="live">LIVE</span>}
            <img className="thumb" src={it.thumb} alt={it.title}/>
            <div className="meta">
              <div className="title">{it.title}</div>
              <div className="tags">{(it.tags||[]).join(' • ')}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
