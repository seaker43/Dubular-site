// components/MediaRow.jsx
import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({ title, href = "#", items = [], loop = true }) {
  const containerRef = useRef(null);

  // triple the data so we can jump inside the middle "set" for a seamless loop
  const data = useMemo(() => (loop ? [...items, ...items, ...items] : items), [items, loop]);
  const setSize = items.length || 1;

  // jump to the middle set on mount; then when user reaches an edge, snap back inside
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !loop) return;

    // width of one card + gap — measured from first child
    const first = el.querySelector("[data-card]");
    if (!first) return;

    const cardW = first.getBoundingClientRect().width + 16; // +gap-4
    const setWidth = cardW * setSize;

    // start in the middle set
    el.scrollLeft = setWidth;

    const onScroll = () => {
      const x = el.scrollLeft;
      // if we drift to the first or last set, jump back into the middle
      if (x <= 8) el.scrollLeft = x + setWidth;              // left edge -> go right by one set
      else if (x >= setWidth * 2 - 8) el.scrollLeft = x - setWidth; // right edge -> go left by one set
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [loop, setSize]);

  return (
    <section className="mb-8">
      <div className="flex items-end justify-between mb-3">
        <Link href={href} className="group inline-flex items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-black text-neon glow">{title}</h2>
          <span className="sr-only">{`Go to ${title}`}</span>
        </Link>
      </div>

      <div
        ref={containerRef}
        className="
          no-scrollbar
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory
          flex gap-4 px-1
          -mx-4 md:mx-0 md:px-0
        "
      >
        {data.map((item, i) => (
          <div key={`${item.title}-${i}`} className="snap-start shrink-0" data-card>
            <ThumbnailCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
