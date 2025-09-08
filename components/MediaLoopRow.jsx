// components/MediaLoopRow.jsx
import { useEffect, useMemo, useRef } from "react";
import ThumbnailCard from "./ThumbnailCard";

/**
 * Seamless infinite row with flicker-hardening:
 *  - triple buffer
 *  - always 'auto' scrollBehavior (touch remains smooth)
 *  - GPU-promoted rail via CSS
 *  - preloads items near the viewport to avoid skeleton flashes
 */
export default function MediaLoopRow({
  title = "",
  items = [],
  square = false, // true for favorites rail
}) {
  const railRef = useRef(null);
  const guardRef = useRef(false);

  const tripled = useMemo(() => {
    if (!items?.length) return [];
    return [...items, ...items, ...items];
  }, [items]);

  // Center on the middle buffer on mount
  useEffect(() => {
    const el = railRef.current;
    if (!el || tripled.length === 0) return;
    const id = requestAnimationFrame(() => {
      const block = el.scrollWidth / 3;
      el.scrollLeft = block; // instant; we keep scrollBehavior 'auto'
    });
    return () => cancelAnimationFrame(id);
  }, [tripled.length]);

  // Seamless wrap; trigger earlier to avoid visible “edge” work
  const handleScroll = () => {
    const el = railRef.current;
    if (!el || guardRef.current) return;

    const block = el.scrollWidth / 3;
    const left = el.scrollLeft;

    const low = block * 0.3;
    const high = block * 1.7;

    if (left < low || left > high) {
      guardRef.current = true;
      // instant re-center with no smooth behavior
      el.scrollLeft = left < low ? left + block : left - block;
      requestAnimationFrame(() => (guardRef.current = false));
    }
  };

  // Preload items local to the center of the row to reduce skeleton flashes
  // Map index -> whether “priority” preload should be used
  const preloadRadius = 6; // how many items to preload around center
  const centerIndex = Math.floor(tripled.length / 2);

  return (
    <section className="mt-6">
      {title && (
        <div className="mb-3 flex items-baseline justify-between px-4 md:px-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      )}

      <div
        ref={railRef}
        onScroll={handleScroll}
        className="scroll-rail no-scrollbar relative flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 md:px-6"
        style={{ scrollBehavior: "auto" }}
      >
        {/* edge spacers */}
        <div className="shrink-0 w-2" aria-hidden="true" />
        {tripled.map((it, i) => {
          const priority =
            Math.abs(i - centerIndex) <= preloadRadius; // preload around middle
          return (
            <div
              key={`${title}-${i}-${it.id ?? it.title ?? "item"}`}
              className="snap-start"
            >
              <ThumbnailCard
                title={it.title}
                image={it.image}
                href={it.href}
                live={it.live}
                color={it.color}
                square={square}
                creator={it.creator}
                priority={priority}
              />
            </div>
          );
        })}
        <div className="shrink-0 w-2" aria-hidden="true" />
      </div>
    </section>
  );
}
