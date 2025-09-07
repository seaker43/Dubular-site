// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({
  title = "Recommended",
  href = "/",
  category,
  items = [],
}) {
  return (
    <section className="mt-8">
      <div className="mb-3 flex items-baseline justify-between px-4 sm:px-6">
        <Link
          href={href || `/${category || ""}`}
          className="text-white text-2xl md:text-3xl font-black tracking-tight hover:opacity-90 transition"
        >
          {title}
        </Link>
        <Link
          href={href || `/${category || ""}`}
          className="text-white/70 hover:text-white text-xs font-semibold uppercase tracking-wider"
        >
          See all →
        </Link>
      </div>

      <div
        className="scrollbar-hide snap-x snap-mandatory overflow-x-auto px-4 sm:px-6"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-3 md:gap-4 pb-2">
          {items.length > 0 ? (
            items.map((it, i) => (
              <div key={i} className="snap-start">
                <ThumbnailCard
                  file={it.file}
                  title={it.title}
                  href={it.href || `/${category || ""}/${i + 1}`}
                  live={it.live}
                />
              </div>
            ))
          ) : (
            <p className="text-white/60 px-2">No items</p>
          )}
        </div>
      </div>
    </section>
  );
}
