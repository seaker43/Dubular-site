"use client";

export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="py-6">
      {title ? (
        <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
      ) : null}
      <div
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((it, i) => (
          <a
            key={i}
            href={it.href || "#"}
            className="snap-start shrink-0 w-64 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600"
            title={it.title}
          >
            <img
              src={it.img || "/placeholder.svg"}
              alt={it.title || "item"}
              className="h-36 w-full object-cover"
              loading="lazy"
            />
            <div className="p-3">
              <div className="text-white text-sm line-clamp-1">{it.title || "Untitled"}</div>
              {Array.isArray(it.tags) && it.tags.length > 0 ? (
                <div className="mt-1 text-xs text-neutral-400 line-clamp-1">
                  {it.tags.join(" • ")}
                </div>
              ) : null}
              {it.live ? (
                <span className="mt-2 inline-block rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-semibold text-white">
                  LIVE
                </span>
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
