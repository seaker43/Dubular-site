// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

/**
 * Props:
 *  - title: section title (string)
 *  - href: link when tapping the title (string)
 *  - category: fallback route slug if href not provided
 *  - items: [{ file, title, category, live }]
 *
 * Notes:
 *  - No CSS grid. Pure horizontal flex row with snap.
 *  - Scrollbar hidden via `scrollbar-hide` utility (in globals.css).
 *  - "Infinite-ish" feel by repeating the set 2x when >= 4 items.
 */
export default function MediaRow({ title, href, category, items = [] }) {
  const safeItems = Array.isArray(items) ? items : [];
  const longList =
    safeItems.length >= 4 ? [...safeItems, ...safeItems] : safeItems;

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-baseline justify-between">
        <Link
          href={href || `/${category || ""}`}
          className="text-white text-2xl md:text-3xl font-black tracking-tight hover:opacity-90 transition"
        >
          {title}
        </Link>
      </div>

      <div
        className="
          relative
          -mx-4 px-4
          overflow-x-auto overflow-y-hidden
          whitespace-nowrap
          scrollbar-hide
          snap-x snap-mandatory
        "
      >
        <ul className="flex gap-4 pr-4">
          {longList.map((it, i) => (
            <li key={`${it.title || it.file}-${i}`} className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-[320px]">
              <ThumbnailCard
                src={`/thumbnails/${category || ""}/${it.file || ""}`}
                title={it.title || "Untitled"}
                category={it.category || category}
                live={it.live}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
