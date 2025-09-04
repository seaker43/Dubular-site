export default function CarouselRow({ title, items, seeAllHref="#" }) {
  return (
    <section style={{margin:"24px 0"}}>
      <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", padding:"0 12px 12px"}}>
        <h2 className="section-title glow">{title}</h2>
        <a href={seeAllHref} className="see-all">See all &gt;</a>
      </div>
      <div className="h-scroll">
        {items.map((it, i) => (
          <article key={i} className="card" style={{scrollSnapAlign:"start"}}>
            <div className="thumb" style={{backgroundImage:`url(${it.img})`}} />
            <div className="meta">
              <span className="pill">LIVE</span>
              <h3 className="card-title glow">{it.title}</h3>
              <div className="card-tags glow-dim">{it.tags}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
