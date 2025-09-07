// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({ title, href, category, items = [] }) {
  return (
    <section className="mt-8">
      {/* Section header */}
      <div className="mb-3 flex items-baseline justify-between">
        <Link
          href={href || `/${category || ""}`}
          className="text-white text-2xl md:text-3xl font-black tracking-tight hover:opacity-90 transition"
        >
          {title}
        </Link>
      </div>

      {/* Thumbnails row */}
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-1 pb-2">
        {items.map((item, idx) => (
          <ThumbnailCard
            key={idx}
            href={item.href}
            title={item.title}
            src={item.src}
            live={item.live}
          />
        ))}
      </div>
    </section>
  );
}
