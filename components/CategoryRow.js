// components/CategoryRow.js
export default function CategoryRow({ title, items }) {
  return (
    <section className="mb-10">
      <h2 className="section-title glow">{title}</h2>

      <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4">
        {items.map((item, idx) => (
          <article
            key={idx}
            className="relative min-w-[220px] bg-neutral-900 rounded-2xl overflow-hidden shadow-md ring-1 ring-neutral-800 hover:ring-cyan-500/40 hover:scale-[1.02] transition-all"
          >
            {item.live && (
              <span className="live-badge">LIVE</span>
            )}

            <img
              className="w-full aspect-video object-cover"
              src={item.img}
              alt={item.title}
              loading="lazy"
            />

            <div className="p-3">
              <h3 className="text-cyan-300 text-sm font-semibold truncate">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 truncate">
                {item.tags.join(" • ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
