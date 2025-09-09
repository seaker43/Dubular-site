// components/MediaLoopRow.jsx
import { useEffect, useRef, useMemo } from "react";
import Thumb from "@/components/Thumb";

/**
 * Seamless, manual horizontal scroller that loops infinitely.
 * - No auto snap-back; you can keep swiping forever.
 * - Duplicates the items 3x and keeps the viewport centered on the middle set.
 *
 * Props:
 *  - items: Array<{
 *      id: string|number,
 *      title?: string,
 *      img?: string,        // or 'image'
 *      image?: string,      // alias
 *      live?: boolean,
 *      href?: string,
 *      color?: "pink"|"blue"|"red",
 *      creator?: { name?: string, slug?: string, logoUrl?: string }
 *    }>
 */
export default function MediaLoopRow({ items = [] }) {
  const railRef = useRef(null);

  const tripled = useMemo(() => {
    if (!items?.length) return [];
    return [...items, ...items, ...items];
  }, [items]);

  // Center viewport on the middle set
  const centerOnMiddle = () => {
    const el = railRef.current;
    if (!el || el.scrollWidth === 0) return;
    const third = el.scrollWidth / 3;
    el.scrollLeft = third + el.clientWidth * 0.5;
  };

  useEffect(() => {
    if (!tripled.length) return;
    centerOnMiddle();
    const el = railRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = el.scrollWidth;
        const third = max / 3;
        const left = el.scrollLeft;

        // Crossed left boundary of first third → jump forward one third
        if (left < third * 0.4) {
          el.scrollLeft = left + third;
        }
        // Crossed right boundary of last third → jump back one third
        else if (left > third * 1.6) {
          el.scrollLeft = left - third;
        }
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => centerOnMiddle();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [tripled.length]);

  if (!items?.length) return null;

  return (
    <div className="thumb-row no-scrollbar" ref={railRef} role="list">
      <div className="shrink-0 w-2" aria-hidden="true" />
      {tripled.map((item, idx) => {
        const key = `${item.id ?? idx}-${idx}`;
        const src = item.image || item.img || "/placeholder.svg";
        return (
          <div key={key} role="listitem" className="snap-start">
            <Thumb
              title={item.title}
              image={src}
              href={item.href}
              live={!!item.live}
              color={item.color}
              square={false}
              creator={item.creator}
              // small perf boost for the first few in view
              priority={idx < 6}
            />
          </div>
        );
      })}
      <div className="shrink-0 w-2" aria-hidden="true" />
    </div>
  );
}
