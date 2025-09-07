// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({
  title,
  href,
  category,
  items = [],
}) {
  return (
    <section className="mt-8">
      {/* Title is the link */}
      <div className="mb-3 flex items-baseline justify-between">
        <Link
          href={href || `/${category || ""}`}
          className="text-white text-2xl md:text-3xl font-black tracking-tight hover:opacity-90 transition"
        >
          {title}
        </Link>
      </div>

      {/* Horizontal scroller */}
      <div
        className="
          relative
          overflow-hidden
        "
      >
        <ul
          className="
            flex gap-4
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory scroll-smooth
            scrollbar-hide
            pb-1 /* prevent box-shadow from triggering a scrollbar */
          "
        >
          {items.map((it, i) => (
            <li
              key={`${category || "row"}-${i}`}
              className="
                snap-start
                shrink-0
                w-[78vw] sm:w-[48vw] md:w-[36vw] lg:w-[28vw]
              "
            >
              <ThumbnailCard
                title={it.title}
                tags={it.tags}
                imgSrc={`/thumbnails/${category}/${it.file}`}
                live={it.live}
                /* Ensure 16:9 and cover to avoid flicker/distortion */
                className="aspect-video"
                imgClassName="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
