import { useEffect, useRef, useMemo } from "react";
import ThumbnailCard from "./ThumbnailCard";

/**
 * Props:
 * - title: string  (section title, click -> href)
 * - href: string   (category page)
 * - category: string  (folder under /public/thumbnails/<category>)
 * - items: Array<{ file: string, title?: string, tags?: string[], href?: string, live?: boolean }>
 *
 * Note: put your images in /public/thumbnails/<category>/<file>
 */
export default function MediaRow({
  title = "Trending Now",
  href = "/trending",
  category = "trending",
  items = [],
}) {
  const containerRef = useRef(null);

  // duplicate items once to create a seamless loop
  const loopItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // hide scrollbar on all platforms
    el.style.scrollbarWidth = "none"; // Firefox
    el.style.msOverflowStyle = "none"; // IE/Edge
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      .no-scrollbar::-webkit-scrollbar { display: none; }
    `;
    document.head.appendChild(styleEl);

    // seamless loop: when we pass the halfway point, jump back by half
    const onScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      // if user swipes hard left past 0, push forward by half
      if (el.scrollLeft === 0) {
        // little nudge to keep inertia nice if at exact 0 and there is content left
        // no-op unless you want reverse loop; keeping simple.
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      document.head.removeChild(styleEl);
    };
  }, []);

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
        ref={containerRef}
        className="no-scrollbar overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-4 px-1"
      >
        {loopItems.map((it, i) => (
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
