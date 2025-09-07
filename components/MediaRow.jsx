import { useEffect, useMemo, useRef, useState } from "react";
import ThumbnailCard from "./ThumbnailCard";

/**
 * Props:
 *  - title, href, category
 *  - items: [{ file, title?, tags?, href?, live? }]
 * Images live at /public/thumbnails/<category>/<file>
 */
export default function MediaRow({
  title = "Trending Now",
  href = "/trending",
  category = "trending",
  items = [],
}) {
  const scrollerRef = useRef(null);
  const [oneSetWidth, setOneSetWidth] = useState(0);

  // Triple the list so we can sit in the middle and recenter invisibly.
  const triple = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // hide scrollbars everywhere
    el.style.scrollbarWidth = "none";
    el.style.msOverflowStyle = "none";
    const styleEl = document.createElement("style");
    styleEl.textContent = `.no-scrollbar::-webkit-scrollbar{display:none}`;
    document.head.appendChild(styleEl);

    // measure width of one full set (card width + gaps)
    const firstCard = el.querySelector("[data-card]");
    if (firstCard) {
      // gap = 1rem (Tailwind gap-4) -> 16px. There are N cards → N gaps, but
      // since we snap per-card, we can estimate per-card stride as cardWidth + 16px.
      const stride = firstCard.offsetWidth + 16;
      setOneSetWidth(stride * items.length);

      // start in the middle set
      requestAnimationFrame(() => {
        el.scrollLeft = stride * items.length; // exactly one set
      });
    }

    // recenter when we drift near the ends so scrolling is seamless
    const onScroll = () => {
      if (!oneSetWidth) return;
      const left = el.scrollLeft;
      const leftEdge = oneSetWidth * 0.25; // a bit into the first set
      const rightEdge = oneSetWidth * 1.75; // a bit into the last set
      if (left < leftEdge) {
        // jump forward one set
        el.scrollLeft = left + oneSetWidth;
      } else if (left > rightEdge) {
        // jump back one set
        el.scrollLeft = left - oneSetWidth;
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
      document.head.removeChild(styleEl);
    };
  }, [items.length, oneSetWidth]);

  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between px-1">
        <a
          href={href}
          className="text-white text-xl font-extrabold tracking-tight hover:opacity-90 transition-opacity"
        >
          {title}
        </a>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-4 px-1"
      >
        {triple.map((it, i) => (
          <div key={`${it.file}-${i}`} className="snap-start shrink-0">
            <ThumbnailCard
              category={category}
              file={it.file}
              title={it.title ?? "Untitled"}
              tags={it.tags ?? []}
              href={it.href ?? "#"}
              live={Boolean(it.live)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
