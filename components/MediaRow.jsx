// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

/**
 * MediaRow
 * - Renders a horizontally scrollable row of thumbnails
 * - The section title itself is the "View all" link
 *
 * Props:
 *  - title: string (required)
 *  - href: string (required) -> category page (e.g. "/trending")
 *  - items: Array<ThumbnailCardProps>
 */
export default function MediaRow({ title, href = "/", items = [] }) {
  return (
    <section className="mb-10">
      {/* Title is the link */}
      <div className="mb-3">
        <Link href={href} className="group inline-block">
          <h2 className="text-2xl md:text-3xl font-extrabold text-neon drop-shadow-glow tracking-tight transition-colors">
            <span className="group-hover:underline">{title}</span>
          </h2>
        </Link>
      </div>

      {/* Thumbnails scroller */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 scrollbar-hide">
        {items.map((item, idx) => (
          <div key={`${item.title ?? "item"}-${idx}`} className="snap-start shrink-0">
            <ThumbnailCard
              title={item.title}
              category={item.category}
              tag={item.tag}
              imgSrc={item.imgSrc}
              live={item.live}
              href={item.href}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
