import { useEffect, useMemo, useRef } from "react";
import MediaCard from "./MediaCard";

/**
 * MediaRow
 * - Shows 12 cards by cycling the provided `items`
 * - Renders 2x list for seamless loop
 * - Keeps scroll anchored when crossing the midpoint
 */
export default function MediaRow({
  title = "",
  items = [],
  hrefPrefix = "",
  showLive = false,
}) {
  const base = items?.length ? items : Array.from({ length: 6 }, (_, i) => ({
    id: `ph-${i + 1}`,
    title: `Item #${i + 1}`,
    category: "art",
    tag: "pixel",
    thumbnail: "/images/placeholder-16x9.jpg",
    live: i % 3 === 0,
  }));

  // We want 12 visible “unique” cards; cycle the base list
  const dozen = useMemo(() => {
    const out = [];
    const need = 12;
    for (let i = 0; i < need; i++) out.push(base[i % base.length]);
    return out;
  }, [base]);

  // Duplicate once for the looping illusion
  const loopList = useMemo(() => [...dozen, ...dozen], [dozen]);

  const scrollerRef = useRef(null);

  // Keep scroll anchored when crossing midpoint
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const mid = el.scrollWidth / 2;

    const onScroll = () => {
      if (el.scrollLeft >= mid) {
        el.scrollLeft -= mid;
      } else if (el.scrollLeft < 1) {
        // If the user flicks back to the start, jump to the "same index" in 2nd half
        el.scrollLeft += mid;
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    // Start in the first half (natural)
    el.scrollLeft = 0;
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const nudge = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // one “card” ~ 280px including gap; adjust if your card width changes
    const step = 280 * 2;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="neon-title">{title}</h2>
        <div className="hidden sm:flex gap-2 pr-2">
          <button
            aria-label="Prev"
            onClick={() => nudge(-1)}
            className="btn-chrome"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={() => nudge(1)}
            className="btn-chrome"
          >
            ›
          </button>
        </div>
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[rgb(8,10,12)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[rgb(8,10,12)] to-transparent" />

      <div
        ref={scrollerRef}
        className="no-scrollbar relative z-0 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-1"
      >
        {loopList.map((item, idx) => (
          <div key={`${item.id ?? idx}-${idx}`} className="snap-start shrink-0">
            <MediaCard
              item={item}
              href={`${hrefPrefix}${item.id ?? idx}`}
              showLive={showLive}
            />
          </div>
        ))}
      </div>

      {/* mobile nudge buttons floating */}
      <div className="sm:hidden">
        <button
          aria-label="Prev"
          onClick={() => nudge(-1)}
          className="btn-fab left-2"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => nudge(1)}
          className="btn-fab right-2"
        >
          ›
        </button>
      </div>
    </section>
  );
}

/* Utility classes (piggyback on globals) */
/* If you prefer, move to globals.css */
