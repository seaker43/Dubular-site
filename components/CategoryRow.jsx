import Link from "next/link";

export default function CategoryRow({ title, items = [] }) {
  const list = items && items.length ? items : [];

  return (
    <section className="mt-8">
      <h3 className="mb-3 text-xl font-semibold gold-glow">
        <Link href={`/category/${encodeURIComponent(title.toLowerCase())}`}>
          {title}
        </Link>
      </h3>

      <div
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Hide webkit scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {list.map((it) => (
          <article
            key={it.id}
            className="snap-start shrink-0 w-[320px]"
            aria-label={it.title}
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl">
              {/* Use <img> so missing files don't break build; adjust path/extension in index.js */}
              <img
                src={it.thumb}
                alt={it.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Bottom gradient for title + live badge */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2
                              bg-gradient-to-t from-black/70 via-black/35 to-transparent">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-medium gold-glow line-clamp-1">{it.title}</h4>
                  {it.live && (
                    <span className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold gold-glow bg-black/40">
                      LIVE
                    </span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
