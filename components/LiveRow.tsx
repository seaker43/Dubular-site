'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ThumbnailCard from '@/components/ThumbnailCard';

type Item = { id: string; title: string; img: string };

const seed: Item[] = [
  { id: 'live-1', title: 'Live #1', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80' },
  { id: 'live-2', title: 'Live #2', img: 'https://images.unsplash.com/photo-1600855944280-818d239f5c25?auto=format&fit=crop&w=1200&q=80' },
  { id: 'live-3', title: 'Live #3', img: 'https://images.unsplash.com/photo-1520973799238-8b1a043d2d9b?auto=format&fit=crop&w=1200&q=80' },
  { id: 'live-4', title: 'Live #4', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80' },
  { id: 'live-5', title: 'Live #5', img: 'https://images.unsplash.com/photo-1600855944280-818d239f5c25?auto=format&fit=crop&w=1200&q=80' },
];

export default function LiveRow() {
  const [data] = useState<Item[]>(() => seed);
  const items = useMemo(() => [...data, ...data, ...data], [data]); // 3x for seamless loop
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const cycle = () => el.scrollWidth / 3;
    const init = () => { el.scrollLeft = cycle(); };
    init();

    const ro = new ResizeObserver(init);
    ro.observe(el);

    const onScroll = () => {
      const c = cycle();
      if (el.scrollLeft <= c * 0.5) el.scrollLeft += c;      // left edge → jump forward
      else if (el.scrollLeft >= c * 2.5) el.scrollLeft -= c; // right edge → jump back
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { ro.disconnect(); el.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <>
      <div className="w-full">
        <div
          id="live-scroller"
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto px-4 py-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overscrollBehaviorX: 'contain' }}
        >
          {items.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="shrink-0 w-[220px] overflow-visible thumb-glow">
              <ThumbnailCard data={{ title: item.title, image: item.img, live: true }} />
            </div>
          ))}
        </div>
      </div>

      {/* Force-hide WebKit scrollbars (Chrome/Android/iOS) */}
      <style jsx global>{`
        #live-scroller::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>
    </>
  );
}
