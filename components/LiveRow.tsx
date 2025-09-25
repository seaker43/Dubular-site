'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardWRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // measure one "set" (card width incl. gap)
    const sample = el.querySelector<HTMLDivElement>('[data-card]');
    cardWRef.current = sample ? sample.getBoundingClientRect().width + 16 /* gap guess */ : 320;

    let ticking = false;
    const oneSet = cardWRef.current;

    const threshold = () => Math.min(oneSet, el.scrollWidth - el.clientWidth - oneSet);

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxBeforeEnd = el.scrollWidth - el.clientWidth - oneSet;
        if (el.scrollLeft > maxBeforeEnd) {
          el.scrollLeft -= oneSet;
        } else if (el.scrollLeft < threshold()) {
          el.scrollLeft += oneSet;
        }
        ticking = false;
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { el.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 py-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            data-card
            className="shrink-0 snap-start w-[320px] rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-neutral-800"
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
