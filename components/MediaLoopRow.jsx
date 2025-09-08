// components/MediaLoopRow.jsx
import { useEffect, useRef } from "react";

/**
 * Seamless, manual horizontal scroller that loops infinitely.
 * - No auto snap-back; you can keep swiping forever.
 * - Duplicates the items 3x and keeps the viewport centered on the middle set.
 * - Uses your existing CSS classes: .thumb-row, .thumb-card, .thumb-img, .thumb-title, .live-badge, glow-*
 *
 * Props:
 *  - title?: string (optional section heading you render outside if you want)
 *  - items: Array<{ id: string|number, title: string, img: string, live?: boolean, href?: string }>
 *  - cardClass?: string (optional extra classes for each card)
 */
export default function MediaLoopRow({ items = [], cardClass = "" }) {
  const railRef = useRef(null);

  // Helper to center on the middle set
  const centerOnMiddle = () => {
    const el = railRef.current;
    if (!el) return;
    // We render items x 3; each set ≈ totalWidth/3
    const third = el.scrollWidth / 3;
    // Put us roughly at the center of the middle set
    el.scrollLeft = third + (el.clientWidth * 0.5);
  };

  useEffect(() => {
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

        // When you cross left boundary of the first third, jump forward one third.
        if (left < third * 0.4) {
          el.scrollLeft = left + third;
        }
        // When you cross right boundary of the last third, jump back one third.
        else if (left > third * 1.6) {
          el.scrollLeft = left - third;
        }
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // Re-center on resize
    const onResize = () => centerOnMiddle();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [items.length]);

  // Duplicate items 3x to create the seamless loop effect
  const tripled = [...items, ...items, ...items];

  return (
    <div className="thumb-row no-scrollbar" ref={railRef} role="list">
      <div className="shrink-0 w-2" aria-hidden="true" />
      {tripled.map((item, idx) => {
        const key = `${item.id ?? idx}-${idx}`;
        const Card = (
          <article
            key={key}
            className={`thumb-card ${item.live ? "glow-red" : "glow-dual"} ${cardClass}`}
            role="listitem"
          >
            <img
              src={item.img}
              alt={item.title ?? "thumbnail"}
              className="thumb-img"
              loading="lazy"
              decoding="async"
              draggable="false"
              onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
            />
            {item.live && <span className="live-badge">LIVE</span>}
            {item.title && <div className="thumb-title">{item.title}</div>}
          </article>
        );
        return item.href ? (
          <a key={`a-${key}`} href={item.href} aria-label={item.title ?? "Open"}>
            {Card}
          </a>
        ) : (
          Card
        );
      })}
      <div className="shrink-0 w-2" aria-hidden="true" />
    </div>
  );
}
