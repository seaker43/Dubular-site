import StreamCard from "./StreamCard";

export default function Row({ title, items, seeAllHref = "#", trending = false }) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        <a
          href={seeAllHref}
          className="text-sm border border-white/30 px-3 py-1 rounded hover:bg-white hover:text-black transition"
        >
          See all &gt;
        </a>
      </div>

      <div className="relative">
        <div className="overflow-x-auto hide-scrollbar scroll-smooth">
          <div className="flex gap-4 pr-4">
            {items.map((v) => (
              <div key={v.title} className="w-64 shrink-0">
                <StreamCard {...v} trending={trending} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
