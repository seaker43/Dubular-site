import StreamCard from "./StreamCard";

export default function Row({ title, items = [], seeAllHref = "#", trending = false }) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="row-title-lime text-2xl sm:text-3xl">{title}</h2>
        <a href={seeAllHref} className="see-all-link text-sm border px-3 py-1 rounded transition">
          See all &gt;
        </a>
      </div>
      <div className="hide-scrollbar overflow-x-auto">
        <div className="flex gap-4 pr-2">
          {items.map((v, i) => (
            <div key={i} className="w-[320px] shrink-0">
              <StreamCard
                title={v.title}
                img={v.img}
                live={v.live}
                edgeColor={v.edgeColor}
                trending={trending}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
