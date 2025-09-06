import React from "react";

/**
 * CategoryRow
 * - title: string (section title)
 * - items: Array<{ title: string, tags: string[] | string, img: string, live?: boolean }>
 */
export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mb-10">
      {/* Section heading with subtle neon gradient */}
      <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white drop-shadow-[0_0_10px_rgba(16,185,129,0.25)]">
        {title}
      </h2>

      {/* Cards grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, i) => {
          const tags = Array.isArray(item.tags) ? item.tags : (item.tags ? [item.tags] : []);
          return (
            <a
              key={`${item.title}-${i}`}
              href="#"
              className="group block"
            >
              {/* Thumbnail with neon ring + hover tint */}
              <div className="relative aspect-video overflow-hidden rounded-lg ring-1 ring-violet-400/50 group-hover:ring-emerald-400/60 transition">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                {/* Subtle inner vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Title row (LIVE badge only when item.live === true) */}
              <div className="mt-2 flex items-center gap-2">
                {item.live && (
                  <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wide bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40">
                    LIVE
                  </span>
                )}
                <span className="font-bold text-violet-200 underline decoration-transparent group-hover:decoration-emerald-300/60 decoration-2 underline-offset-2 transition-colors group-hover:text-emerald-200">
                  {item.title}
                </span>
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="text-sm text-violet-300/80">
                  {tags.join(" • ")}
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
