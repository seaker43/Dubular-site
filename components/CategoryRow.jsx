export default function CategoryRow({ title, items=[] }) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-[clamp(16px,3.6vw,20px)] font-semibold tracking-wide text-[color:#18e27a] drop-shadow-[0_0_10px_rgba(24,226,122,.45)]">
          {title}
        </h2>
        <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(24,226,122,.35),transparent)]" />
      </div>

      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pb-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it, i) => (
          <article key={i} className="min-w-[68%] xs:min-w-[58%] sm:min-w-[42%] md:min-w-[320px] snap-start shrink-0">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-[0_0_24px_rgba(24,226,122,.12)] ring-1 ring-[rgba(24,226,122,.22)] bg-black/40">
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(24,226,122,.12),transparent_70%)]" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
            </div>

            <div className="mt-2 flex items-center gap-2">
              <h3 className="text-[clamp(14px,3.2vw,18px)] font-medium text-white/95 truncate">{it.title}</h3>
              {it.live ? (
                <span
                  aria-label="live now"
                  className="inline-flex items-center gap-1 rounded-full border border-[rgba(24,226,122,.35)] bg-[rgba(24,226,122,.12)] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[color:#18e27a] shadow-[0_0_14px_rgba(24,226,122,.25)]"
                >
                  <span className="h-2 w-2 rounded-full bg-[color:#18e27a] shadow-[0_0_10px_rgba(24,226,122,.8)]" />
                  LIVE
                </span>
              ) : null}
            </div>

            {it.tags?.length ? (
              <p className="mt-1 text-[12px] text-white/55 truncate">
                {it.tags.join(" • ")}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
