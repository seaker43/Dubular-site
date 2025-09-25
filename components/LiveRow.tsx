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
  const items = useMemo(() => [...data, ...data, ...data], [data]); // 3x for seamless loop
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Each cycle width = total scrollWidth / 3 (because we rendered 3 cycles)
    const cycle = () => el.scrollWidth / 3;

    // Start centered (cycle #2) so user can scroll both directions immediately
    const init = () => { el.scrollLeft = cycle() + 1; };
    // If layout shifts, re-center
    const ro = new ResizeObserver(() => init());
    ro.observe(el);

    init();

    const onScroll = () => {
      // Only adjust when the user approaches the edges (no extra speed added)
      const c = cycle();
      const lower = c * 0.15;        // 15% into cycle 1
      const upper = c * 2.85;        // 15% before end of cycle 3
      if (el.scrollLeft < lower) {
        el.scrollLeft += c;          // jump forward one cycle
      } else if (el.scrollLeft > upper) {
        el.scrollLeft -= c;          // jump back one cycle
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-2"
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
  );
}
