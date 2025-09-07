export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight mb-4 text-white/90">
        {title}
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Card key={`${title}-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function Card({ item }) {
  const { title, img, tags = [], live = false } = item ?? {};

  return (
    <article className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-[0_0_0_1px_rgba(0,0,0,0.2)_inset] transition duration-200 hover:border-cyan-400">
      {/* Thumb */}
      <div className="relative">
        {live && (
          <span className="absolute left-2 top-2 z-10 select-none rounded-md bg-red-600 px-2 py-0.5 text-xs font-semibold text-white shadow-[0_0_12px_#ef4444]">
            LIVE
          </span>
        )}
        <img
          src={img}
          alt={title}
          className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* Meta */}
      <div className="p-3">
        <h3 className="mb-1 line-clamp-1 text-base font-semibold text-white/90">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <a
              key={i}
              href={`/#tag/${encodeURIComponent(t)}`}
              className="rounded-md border border-neutral-700/70 px-2 py-0.5 text-xs text-neutral-300 hover:border-cyan-400 hover:text-cyan-300"
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
