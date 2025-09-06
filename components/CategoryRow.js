export default function CategoryRow({ title, items }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-2xl font-bold text-emerald-300">{title}</h2>
      <div className="flex snap-x gap-4 overflow-x-auto pb-3">
        {items.map((it, idx) => (
          <a
            key={idx}
            href="#"
            className="group relative w-64 flex-shrink-0 snap-start overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-neutral-800 hover:scale-[1.03] hover:ring-emerald-400/60 transition-all duration-300"
          >
            <img
              src={it.img}
              alt=""
              loading="lazy"
              className="h-36 w-full object-cover"
            />
            <div className="p-3">
              <div className="flex items-center gap-2">
                {it.live && (
                  <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-bold bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/40 shadow-[0_0_6px_#34d399,0_0_12px_#34d399]">
                    LIVE
                  </span>
                )}
                <span className="text-lg font-semibold leading-tight text-gray-100 group-hover:text-emerald-300 transition-colors">
                  {it.title}
                </span>
              </div>
              {it.tags && it.tags.length > 0 && (
                <p className="mt-1 text-sm text-gray-400">
                  {it.tags.join(" • ")}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
