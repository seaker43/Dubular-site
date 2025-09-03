import StreamCard from "./StreamCard";

export default function Row({ title, items=[], flame=false, seeAllHref="#" }) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="heading-cyan">{title}</h2>
        <a href={seeAllHref} className="seeall">See all &gt;</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((v, i) => (
          <StreamCard key={i} {...v} flame={flame} />
        ))}
      </div>
    </section>
  );
}
