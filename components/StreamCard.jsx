export default function StreamCard({ item }) {
  return (
    <article className="card" role="listitem">
      <div className="thumb-wrap">
        <img className="thumb" src={item.thumb} alt={item.title} loading="lazy" />
        {item.live && <span className="badge">LIVE</span>}
      </div>
      <h3 className="card-title">{item.title}</h3>
    </article>
  );
}
