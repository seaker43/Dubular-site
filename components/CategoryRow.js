export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-3xl md:text-4xl font-extrabold text-emerald-300 drop-shadow-neon">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]">
        <style jsx>{`div::-webkit-scrollbar{display:none}`}</style>
        {items.map((it, idx) => (
          <a key={idx} href="#" className="snap-start min-w-[280px] max-w-[360px] bg-neutral-900/80 rounded-xl overflow-hidden ring-1 ring-neutral-800 hover:ring-emerald-400/60 transition-all duration-200 hover:scale-[1.02]">
            <div className="aspect-video bg-neutral-800">
              <img src={(it.img||it.thumb)} alt={it.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2">
                {it.live ? (<span className="inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-bold bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/40">LIVE</span>) : null}
                <h3 className="text-lg font-semibold leading-tight text-gray-100">{it.title}</h3>
              </div>
              {(it.tags&&it.tags.length) ? (<p className="mt-1 text-sm text-gray-400">{it.tags.join(" • ")}</p>) : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
