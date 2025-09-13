import React from "react";
import Link from "next/link";

/**
 * CategoryRow
 * Props:
 *  - title: string
 *  - items: Array<{ id: string|number, title: string, thumb: string, live?: boolean }>
 */
export default function CategoryRow({ title, items = [] }) {
  const list = Array.isArray(items) ? items : [];

  return (
    <section className="mt-8">
      <h3 className="mb-3 text-xl font-semibold gold-glow">
        <Link href={`/category/${encodeURIComponent((title || "").toLowerCase())}`}>
          {title}
        </Link>
      </h3>

      <div
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2
                   [--ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Hide webkit scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {list.map((it) => (
          <article
            key={it?.id ?? String(Math.random())}
            aria-label={it?.title || ""}
            className="snap-start shrink-0 w-[320px]"
          >
            <div className="px-0 sm:px-0 lg:px-0 relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl">
              {/* Use <img> so missing files don't break build; Next/Image can be added later */}
              <img
                src={it?.thumb || ""}
                alt={it?.title || ""}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Bottom gradient for title + live badge */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-0
                              bg-gradient-to-t from-black/70 via-black/35 to-transparent">
                <div className="px-0 sm:px-0 lg:px-0 flex items-center justify-between gap-2">
                  <h4 className="text-sm font-medium gold-glow line-clamp-1">
                    {it?.title || ""}
                  </h4>
                  {it?.live && (
                    <span className="live-badge">LIVE</span>
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
