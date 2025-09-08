// components/MediaLoopRow.jsx
import { useEffect, useMemo, useRef } from "react";
import ThumbnailCard from "./ThumbnailCard";

/**
 * Seamless, jitter-free infinite row:
 *  - Triple-buffer items
 *  - Start centered on buffer B
 *  - When near edges of B, jump by exactly one buffer (no animation)
 *  - Scroll-snap to keep cards aligned
 *  - GPU transforms + containment remove jitter on hover/scroll
 */
export default function MediaLoopRow({
  title = "",
  items = [],
  square = false, // set true for favorites row
}) {
  const railRef = useRef(null);
  const guardRef = useRef(false);

  const tripled = useMemo(() => {
    if (!items?.length) return [];
    return [...items, ...items, ...items];
  }, [items]);

  // position to the middle buffer on mount
  useEffect(() => {
    const el = railRef.current;
    if (!el || tripled.length === 0) return;

    const id = requestAnimationFrame(() => {
      const block = el.scrollWidth / 3;
      const prev = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.scrollLeft = block;
      el.style.scrollBehavior = prev || "";
    });
    return () => cancelAnimationFrame(id);
  }, [tripled.length]);

  const handleScroll = () => {
    const el = railRef.current;
    if (!el || guardRef.current) return;

    const block = el.scrollWidth / 3;
    const left = el.scrollLeft;

    // only wrap when safely past card widths to avoid visible jumps
    const low = block * 0.2;
    const high = block * 1.8;

    if (left < low || left > high) {
      guardRef.current = true;
      const prev = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.scrollLeft = left < low ? left + block : left - block;
      el.style.scrollBehavior = prev || "";
      // release on next frame
      requestAnimationFrame(() => (guardRef.current = false));
    }
  };

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
        style={{ scrollBehavior: "smooth" }}
      >
        {/* spacing sentinels so edges feel separated */}
        <div className="shrink-0 w-2" aria-hidden="true" />
        {tripled.map((it, i) => (
          <div key={`${title}-${i}-${it.id ?? it.title ?? "item"}`} className="snap-start">
            <ThumbnailCard
              title={it.title}
              image={it.image}
              href={it.href}
              live={it.live}
              color={it.color}
              square={square}
              creator={it.creator}
            />
          </div>
        ))}
        <div className="shrink-0 w-2" aria-hidden="true" />
      </div>
    </section>
  );
}
