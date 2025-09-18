"use client";
import React, { useRef } from "react";
import Link from "next/link";

export default function CategoryRow({ title = "Section", items = [] }) {
  const scroller = useRef(null);
  const scrollBy = (dx) => scroller.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <section className="py-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="space-x-2">
          <button onClick={() => scrollBy(-320)} className="rounded border border-white/15 px-2 py-1">‹</button>
          <button onClick={() => scrollBy(320)}  className="rounded border border-white/15 px-2 py-1">›</button>
        </div>
      </div>

      <div
        ref={scroller}
        style={{ scrollBehavior: "smooth" }}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory [--ms-overflow-style:none] [scrollbar-width:none]"
      >
        {items.map((it, i) => (
          <Link
            key={i}
            href={it.href || "#"}
            className="min-w-[280px] snap-start shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            <div className="relative">
              <img
                src={it.img || "/placeholder.svg"}
                alt={it.title || "item"}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <div className="truncate text-sm text-white/90">{it.title || "Untitled"}</div>
              {Array.isArray(it.tags) && it.tags.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-white/60">
                  {it.tags.map((t, j) => (
                    <span key={j} className="rounded bg-white/10 px-2 py-0.5">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
