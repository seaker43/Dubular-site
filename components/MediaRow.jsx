// components/MediaRow.jsx
import { useMemo } from "react";
import Link from "next/link";

const DEFAULT_ITEMS = [
  { title: "LoFi #1", src: "/thumbnails/lofi1.jpg", tags: ["music", "lofi"], live: true },
  { title: "LoFi #2", src: "/thumbnails/lofi2.jpg", tags: ["music", "lofi"] },
  { title: "Pixel Art #1", src: "/thumbnails/pixel1.jpg", tags: ["art", "pixel"] },
  { title: "Pixel Art #2", src: "/thumbnails/pixel2.jpg", tags: ["art", "pixel"] },
];

export default function MediaRow({
  title = "Trending Now",
  items = DEFAULT_ITEMS,
  href = "/streams",
}) {
  // Duplicate the list to create a loop-back feel
  const renderItems = useMemo(() => [...items, ...items], [items]);

  return (
    <section className="mb-10">
      <div className="flex items-end justify-between px-4 sm:px-6">
        <h2 className="neon-heading">{title}</h2>
        <Link href={href} className="text-sm text-muted hover:text-neon transition-colors">
          View all
        </Link>
      </div>

      <div className="relative mt-4">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-bg to-transparent rounded-l-xl" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-bg to-transparent rounded-r-xl" />

        <div
          className="grid snap-x snap-mandatory auto-cols-[82%] sm:auto-cols-[46%] lg:auto-cols-[32%] grid-flow-col gap-4 px-4 sm:px-6 overflow-x-auto scroll-smooth scrollbar-hidden"
          aria-label={title}
        >
          {renderItems.map((item, idx) => (
            <Card key={`${item.title}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, src, tags = [], live = false }) {
  return (
    <article className="group relative rounded-2xl overflow-hidden bg-card ring-1 ring-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="aspect-[16/9] w-full overflow-hidden">
        {/* Using plain <img> keeps it simple and works with CF Pages static export */}
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* bottom overlay */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="h-24 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
          <div>
            <h3 className="text-neon-strong text-lg leading-tight">{title}</h3>
            {tags.length > 0 && (
              <p className="mt-1 text-xs text-muted">{tags.join(" • ")}</p>
            )}
          </div>
          {live && <span className="live-pill">LIVE</span>}
        </div>
      </div>

      {/* subtle outer glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_120px_-30px_var(--neon)]" />
    </article>
  );
}
