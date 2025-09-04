import Link from "next/link";

export default function Shelf({ title, href = "#", items = [] }) {
  return (
    <section className="section">
      <div className="bar">
        <h2 className="h2" style={{color:"#58f6ff"}}>{title}</h2>
        <Link className="seeall" href={href} style={{color:"#ff5ad4"}}>See all &gt;</Link>
      </div>
      <div className="shelf">
        {items.map(x => (
          <article className="item" key={x.id}>
            <div className="card">
              <img className="thumb" src={x.img} alt={x.title}/>
              <div className="overlay" />
              <div className="meta">
                {x.live && <span className="badge">LIVE</span>}
                <h3 className="title">{x.title}</h3>
                <div className="sub">{x.tags}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
