// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({
  title,
  href,
  category,
  items = [],
}) {
  const showCTA = (href || category) && items.length > 0;

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-baseline justify-between px-1">
        <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight">
          {title}
        </h3>
        {showCTA ? (
          <Link
            href={href || `/${category}`}
            className="text-white/70 hover:text-white text-sm font-semibold tracking-wide"
          >
            SEE ALL →
          </Link>
        ) : null}
      </div>

      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1">
        {items.length === 0 ? (
          <div className="text-white/50 text-sm px-1 py-6">
            Nothing to show yet.
          </div>
        ) : (
          items.map((it, i) => (
            <div
              key={`${it.file || it.src}-${i}`}
              className="min-w-[66vw] sm:min-w-[320px] snap-start"
            >
              <ThumbnailCard
                src={it.src || `/thumbnails/${it.file}`}
                title={it.title}
                href={it.href || "#"}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
