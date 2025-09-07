// components/CategoryRow.js
import React from "react";

export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mb-10">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
      </header>

      {/* Row */}
      <div className="group relative">
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, idx) => (
            <Card key={`${title}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  const { title, img, tags = [], live } = item ?? {};
  return (
    <article className="min-w-[290px] max-w-[290px] select-none">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/5 bg-white/5 shadow-sm transition-transform duration-200 hover:-translate-y-[2px]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Live badge */}
        {live && (
          <span className="absolute left-2 top-2 rounded-full bg-red-500/90 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md animate-neon">
            Live
          </span>
        )}
      </div>

      <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-slate-100">
        {title}
      </h3>

      <div className="mt-1 flex flex-wrap gap-2">
        {tags.slice(0, 3).map((t, i) => (
          <span
            key={i}
            className="rounded-full bg-slate-800/60 px-2 py-0.5 text-xs text-slate-300 ring-1 ring-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
