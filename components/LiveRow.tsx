'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

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
      <div className="w-full overflow-hidden">
        <div
          id="live-scroller"
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto px-4 py-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overscrollBehaviorX: 'contain' }}
        >
          {items.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="shrink-0 w-[320px] rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-neutral-800"
            >
              <div className="relative aspect-video">
                <Image
                  unoptimized
                  loading="lazy"
                  decoding="async"
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="320px"
                />
                <span className="absolute top-2 left-2 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold">LIVE</span>
              </div>
              <div className="p-3">
                <p className="text-cyan-300 text-sm font-medium">{item.title}</p>
              </div>
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
