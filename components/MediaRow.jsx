// components/MediaRow.jsx
import { useMemo } from "react";
import Link from "next/link";

const FALLBACK = [
  { title: "LoFi #1", src: "/thumbnails/lofi1.jpg", tags: ["music", "lofi"], live: true },
  { title: "LoFi #2", src: "/thumbnails/lofi2.jpg", tags: ["music", "lofi"] },
  { title: "Pixel Art #1", src: "/thumbnails/pixel1.jpg", tags: ["art", "pixel"] },
  { title: "Pixel Art #2", src: "/thumbnails/pixel2.jpg", tags: ["art", "pixel"] },
  { title: "LoFi #3", src: "/thumbnails/lofi3.jpg", tags: ["music", "lofi"] },
  { title: "Pixel Art #3", src: "/thumbnails/pixel3.jpg", tags: ["art", "pixel"] },
];

export default function MediaRow({ title = "Trending Now", items = FALLBACK, href = "#" }) {
  // loop by duplicating so you can keep scrolling
  const renderItems = useMemo(() => [...items, ...items], [items]);

  return (
    <section className="mb-12">
      <div className="flex items-end justify-between px-4 sm:px-6">
        <h2 className="neon-heading">{title}</h2>
        {href && (
          <Link href={href} className="text-sm text-muted hover:text-neon transition-colors">
            View all
          </Link>
        )}
      </div>

      <div className="relative mt-4">
        <div
          className="flex gap-4 px-4 sm:px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden"
          aria-label={title}
        >
          {renderItems.map((it, i) => (
            <Card key={`${it.title}-${i}`} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, src, tags = [], live = false }) {
  return (
    <article className="group relative min-w-[240px] max-w-[260px] snap-start rounded-2xl overflow-hidden bg-card shadow-neon">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="h-20 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
          <div>
            <h3 className="text-neon-strong text-base leading-tight">{title}</h3>
            {!!tags.length && <p className="mt-1 text-xs text-muted">{tags.join(" • ")}</p>}
          </div>
          {live && <span className="live-pill">LIVE</span>}
        </div>
      </div>
    </article>
  );
}
