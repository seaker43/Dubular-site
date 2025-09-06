export default function CategoryRow({ title, items=[] }) {
  return (
    <section className="my-8">
      <h2 className="px-4 text-2xl font-extrabold tracking-wide text-[#18e27a] drop-shadow-[0_0_18px_rgba(24,226,122,0.45)]">
        {title}
      </h2>
      <div className="mt-4 flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it, idx) => (
          <a key={idx} href="#"
             className="snap-start shrink-0 w-[72vw] sm:w-[240px] group rounded-2xl border border-white/10 bg-neutral-900/70 shadow-[0_0_24px_rgba(24,226,122,0.18)] ring-1 ring-white/5 backdrop-blur hover:shadow-[0_0_32px_rgba(24,226,122,0.35)] transition-all">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-neutral-800"
                 style={{backgroundImage:`url(${it.thumb||""})`, backgroundSize:"cover", backgroundPosition:"center"}}>
              {it.live && (
                <span className="absolute left-2 top-2 rounded-md bg-[#18e27a] px-2 py-0.5 text-[11px] font-black text-black shadow-[0_0_16px_rgba(24,226,122,0.6)]">
                  LIVE
                </span>
              )}
            </div>
            <div className="p-3">
              <div className="text-[15px] font-semibold leading-tight">{it.title}</div>
              {!!(it.tags && it.tags.length) && (
                <div className="mt-1 text-[12px] opacity-75">{it.tags.join(" • ")}</div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
