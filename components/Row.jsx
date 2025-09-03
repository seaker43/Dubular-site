import StreamCard from "./StreamCard";

export default function Row({ title, link = "#", items = [] }) {
  return (
    <section className="row">
      <div className="row-head">
        <h2 className="row-title">{title}</h2>
        <a className="see-all" href={link}>See all &gt;</a>
      </div>
      <div className="rail" role="list">
        {items.map((it) => (
          <StreamCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}
