import ThumbnailCard from "./ThumbnailCard";

/**
 * Horizontal, snap-scrolling row with hidden scrollbar.
 * Pass `category` and each item’s `file` so src resolves to /public/thumbnails/<category>/<file>
 */
export default function MediaRow({
  title,
  href = "#",
  category = "trending",
  items = [],
}) {
  return (
    <section className="w-full px-2 sm:px-4 mt-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Title as a link to category page */}
        <a href={href} className="inline-block">
          <h2 className="text-white text-2xl font-extrabold tracking-tight hover:opacity-90 transition">
            {title}
          </h2>
        </a>

        <div
          className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((it, i) => (
            <div key={`${category}-${it.file}-${i}`} className="snap-start shrink-0">
              <ThumbnailCard
                href={it.href || "#"}
                src={`/thumbnails/${category}/${it.file}`}
                title={it.title}
                tags={it.tags}
                live={!!it.live}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
