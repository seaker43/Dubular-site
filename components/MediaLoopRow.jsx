// components/MediaLoopRow.jsx
import { useEffect, useMemo, useRef } from "react";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaLoopRow({
  title = "",
  items = [],
  square = false, // true for favorites rail
}) {
  const railRef = useRef(null);
  const guardRef = useRef(false);

  // Triple buffer for seamless looping
  const tripled = useMemo(() => {
    if (!items?.length) return [];
    return [...items, ...items, ...items];
  }, [items]);

  // Jump to middle buffer on mount
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

  // Wrap scroll seamlessly
  const handleScroll = () => {
    const el = railRef.current;
    if (!el || guardRef.current) return;
    const block = el.scrollWidth / 3;
    const left = el.scrollLeft;
    const low = block * 0.2;
    const high = block * 1.8;
    if (left < low || left > high) {
      guardRef.current = true;
      const prev = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.scrollLeft = left < low ? left + block : left - block;
      el.style.scrollBehavior = prev || "";
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
        {/* Spacers on edges */}
        <div className="shrink-0 w-2" aria-hidden="true" />
        {tripled.map((it, i) => (
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
            />
          </div>
        ))}
        <div className="shrink-0 w-2" aria-hidden="true" />
      </div>
    </section>
  );
}
