// components/MediaLoopRow.jsx
import { useEffect, useMemo, useRef } from "react";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaLoopRow({ title = "", items = [] }) {
  const trackRef = useRef(null);

  // Duplicate list for seamless loop
  const doubled = useMemo(() => [...items, ...items], [items]);

  // On mount: center scroll at start of 2nd half for bi-directional room
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Wait a tick so widths are measured
    const id = requestAnimationFrame(() => {
      const half = el.scrollWidth / 2;
      el.scrollLeft = half - el.clientWidth / 2;
    });
    return () => cancelAnimationFrame(id);
  }, [doubled.length]);

  // Loop effect: if you cross either half, jump back into center window
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;

    if (el.scrollLeft < half * 0.25) {
      // too far left → nudge right by half
      el.scrollLeft += half;
    } else if (el.scrollLeft > half * 1.75) {
      // too far right → nudge left by half
      el.scrollLeft -= half;
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
          relative
          flex gap-4
          overflow-x-auto
          snap-x snap-mandatory
          scroll-px-4 px-4 md:px-6
          [scrollbar-width:none]
        "
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Hide scrollbar (WebKit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {doubled.map((it, i) => (
          <ThumbnailCard
            key={`${title}-${i}-${it.id ?? it.title}`}
            title={it.title}
            image={it.image}
            color={it.color} // "pink" | "blue" | "red"
          />
        ))}
      </div>
    </section>
  );
}
