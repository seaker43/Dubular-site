// components/MediaLoopRow.jsx
import { useEffect, useMemo, useRef } from "react";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaLoopRow({ title = "", items = [] }) {
  const trackRef = useRef(null);

  // Triple buffer for seamless looping (A | B | C all identical)
  const tripled = useMemo(() => {
    if (!items?.length) return [];
    return [...items, ...items, ...items];
  }, [items]);

  // Position at start of the middle buffer on mount
  useEffect(() => {
    const el = trackRef.current;
    if (!el || tripled.length === 0) return;

    // wait a tick so widths are measured
    const id = requestAnimationFrame(() => {
      const block = el.scrollWidth / 3; // width of one buffer
      // snap instantly without smooth to avoid visible jump
      const prev = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.scrollLeft = block; // middle buffer start
      el.style.scrollBehavior = prev || "";
    });
    return () => cancelAnimationFrame(id);
  }, [tripled.length]);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const block = el.scrollWidth / 3;

    // invisible wrap: when drifting near ends of middle buffer,
    // jump by exactly one block with behavior 'auto' so user doesn't see it.
    const prev = el.style.scrollBehavior;
    if (el.scrollLeft <= block * 0.25) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft += block;
      el.style.scrollBehavior = prev || "";
    } else if (el.scrollLeft >= block * 1.75) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft -= block;
      el.style.scrollBehavior = prev || "";
    }
  };

  return (
    <section className="mt-6">
      {title ? (
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      ) : null}

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="
          relative flex gap-4 overflow-x-auto
          snap-x snap-mandatory
          scroll-px-4 px-4 md:px-6
          no-scrollbar
        "
        // Keep smooth only for user-initiated scrolling; we override to 'auto' during invisible wraps
        style={{ scrollBehavior: "smooth" }}
      >
        {/* WebKit scrollbar hide (fallback to class for Firefox) */}
        <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

        {tripled.map((it, i) => (
          <ThumbnailCard
            key={`${title}-${i}-${it.id ?? it.title ?? "item"}`}
            title={it.title}
            image={it.image}
            color={it.color} // "pink" | "blue" | "red"
          />
        ))}
      </div>
    </section>
  );
}
