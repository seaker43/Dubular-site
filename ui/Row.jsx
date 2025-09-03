import StreamCard from "./StreamCard";

export default function Row({ title, items = [], seeAllHref = "#", trending = false }) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <a href={seeAllHref} className="text-sm border border-white/20 px-3 py-1 rounded hover:bg-white hover:text-black transition">
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
