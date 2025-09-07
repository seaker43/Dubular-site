// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({ title, href, items }) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <Link href={href || "#"} className="text-2xl font-bold text-gold hover:underline">
          {title}
        </Link>
      </div>

      {/* Horizontal row with hidden scrollbar + snap */}
      <div className="flex space-x-4 overflow-x-scroll hide-scrollbar snap-x snap-mandatory">
        {items.map((item, idx) => (
          <div key={idx} className="snap-start shrink-0 w-64">
            <ThumbnailCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
