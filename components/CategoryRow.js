export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mb-8">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_26px_rgba(16,185,129,0.45)] mt-10 mb-6">
        {title}
      </h2>

      <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory">
        {items.map((it, idx) => {
          const thumb = it.thumb || it.img;
          const name  = it.name  || it.title || "Untitled";
          const href  = it.href  || it.url   || "#";
          const tags  = Array.isArray(it.tags) ? it.tags : (typeof it.tags === "string" ? it.tags.split(",").map(s=>s.trim()) : []);

        return (
          <a key={idx} href={href} className="group snap-start w-64 shrink-0 block">
            <div className={
              "aspect-video w-full overflow-hidden rounded-md shadow-sm ring-1 ring-white/10 transition duration-300 ease-out will-change-transform " +
              "group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg " +
              (it.live ? "group-hover:ring-red-500/80" : "group-hover:ring-emerald-400/80")
            }>
              <img
                src={thumb}
                alt={name}
                className="w-full h-full object-cover translate-z-0"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold line-clamp-1">{name}</span>
                {it.live ? (
                  <span className="px-2 py-0.5 text-[10px] leading-none font-bold text-white bg-red-600 rounded shadow-lg animate-pulse glow-red">
                    LIVE
                  </span>
                ) : (
                  <span className="px-2 py-0.5 text-[10px] leading-none font-bold text-emerald-400 rounded shadow-md animate-pulse glow-neon">
                    ●
                  </span>
                )}
              </div>
              {!!tags.length && (
                <div className="text-sm text-white/60 line-clamp-1">{tags.join(" • ")}</div>
              )}
            </div>
          </a>
        );})}
      </div>
    </section>
  );
}
