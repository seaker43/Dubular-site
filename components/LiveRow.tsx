'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type Item = { id: string; title: string; img: string };

const seed: Item[] = [
  { id: 'live-1', title: 'Live #1', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { id: 'live-2', title: 'Live #2', img: 'https://images.unsplash.com/photo-1600855944280-818d239f5c25?q=80&w=1200&auto=format&fit=crop' },
  { id: 'live-3', title: 'Live #3', img: 'https://images.unsplash.com/photo-1520973799238-8b1a043d2d9b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'live-4', title: 'Live #4', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { id: 'live-5', title: 'Live #5', img: 'https://images.unsplash.com/photo-1600855944280-818d239f5c25?q=80&w=1200&auto=format&fit=crop' },
];

export default function LiveRow() {
  const [data] = useState<Item[]>(() => seed);
  const items = useMemo(() => [...data, ...data, ...data], [data]); // render 3x for seamless loop
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // start in the middle cycle (so you can scroll both directions)
    const cycle = () => el.scrollWidth / 3;
    const init = () => { el.scrollLeft = cycle(); };
    init();

    // Re-center on layout changes (image loads, orientation, etc.)
    const ro = new ResizeObserver(() => init());
    ro.observe(el);

    const onScroll = () => {
      // compute each time so it stays correct as content sizes change
      const c = cycle();

      // If user gets close to the left edge of cycle 1 → jump forward one cycle
      if (el.scrollLeft <= c * 0.5) {
        el.scrollLeft += c;
        return;
      }
      // If user gets close to the right edge of cycle 3 → jump back one cycle
      if (el.scrollLeft >= c * 2.5) {
        el.scrollLeft -= c;
        return;
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <div
          id="live-scroller"
          ref={scrollerRef}
          // No snap; hide scrollbar via class + inline properties for Firefox/IE
          className="flex gap-4 overflow-x-auto px-4 py-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="shrink-0 w-[320px] rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-neutral-800"
            >
              <div className="relative aspect-video">
                <Image src={item.img} alt={item.title} fill priority sizes="320px" />
                <span className="absolute top-2 left-2 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold">LIVE</span>
              </div>
              <div className="p-3">
                <p className="text-cyan-300 text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Force-hide WebKit scrollbars without relying on global CSS */}
      <style jsx global>{`
        #live-scroller::-webkit-scrollbar { display: none; height: 0; width: 0; }
      `}</style>
    </>
  );
}
