export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="my-6">
      <h2 className="mb-3 pl-2 text-2xl font-extrabold text-green-300 drop-shadow-[0_0_10px_rgba(34,197,94,0.45)]">{title}</h2>
      <div className="mask-hfade overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
        <div className="flex gap-3 pb-2 pr-3 snap-x snap-mandatory">
          {items.map((it, idx) => (
            <a key={idx} href="#" className="snap-start shrink-0 w-[72vw] max-w-[320px] sm:w-[280px] rounded-2xl border border-green-400/20 bg-neutral-900/70 p-3 text-green-100 shadow-[0_0_18px_rgba(34,197,94,0.25)] hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]">
              <div className="aspect-[16/9] w-full rounded-xl bg-neutral-800/70 mb-2 flex items-center justify-center text-neutral-400 text-sm">
                thumb
              </div>
              <div className="text-lg font-semibold">{it.title}</div>
              {it.tags?.length ? (
                <div className="text-xs text-neutral-400 mt-1">{it.tags.join(" • ")}</div>
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
