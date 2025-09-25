"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Item = { id: string; title: string; img: string };
const seed: Item[] = [
  { id: "live-1", title: "Live #1", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-2", title: "Live #2", img: "https://images.unsplash.com/photo-1600855944280-818d239f5c25?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-3", title: "Live #3", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-4", title: "Live #4", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop" },
];

export default function LiveRow() {
  const [data, setData] = useState<Item[]>(() => [...seed, ...seed, ...seed]);
  const listRef = useRef<HTMLUListElement>(null);
  const cardWRef = useRef<number>(0);
  const gapRef = useRef<number>(12);

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const first = el.querySelector("li") as HTMLElement | null;
    if (first) {
      const styles = getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "12") || 12;
      gapRef.current = gap;
      cardWRef.current = first.offsetWidth + gap;
      const oneSetWidth = cardWRef.current * seed.length;
      el.scrollLeft = oneSetWidth + 1;
    }
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    let ticking = false;
    const threshold = () => Math.max(24, cardWRef.current * 0.5);

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const left = el.scrollLeft;
        const prev = (el as any)._lastLeft ?? left;
        const rawDelta = left - prev;
        const ts = performance.now(); const prevTs = (el as any)._lastTs ?? ts; (el as any)._lastTs = ts; let speed = Math.abs(rawDelta) / Math.max(1, now - prevTs); speed *= 0.85; el.style.scrollSnapType="none";
        const ts2 = performance.now(); const prevTs2 = (el as any)._lastTs ?? ts2; (el as any)._lastTs = ts2; speed = Math.abs(rawDelta) / Math.max(1, ts2 - prevTs2); el.style.scrollSnapType="none";

        // cap max flick speed
        const maxDelta = Math.max(10, cardWRef.current * 0.30);
        if (Math.abs(rawDelta) > maxDelta) {
          el.scrollLeft = prev + Math.sign(rawDelta) * maxDelta;
        }
        (el as any)._lastLeft = el.scrollLeft;

        const maxBeforeEnd = el.scrollWidth - el.clientWidth - threshold();

        const oneSet = cardWRef.current * seed.length;
        if (el.scrollLeft > maxBeforeEnd) { el.scrollLeft -= oneSet; }
        else if (el.scrollLeft < threshold()) { el.scrollLeft += oneSet; }
            return [last, ...rest];
  el.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    el.removeEventListener("scroll", onScroll);
  };
        }

        ticking = false;
  el.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    el.removeEventListener("scroll", onScroll);
  };
    };

  el.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    el.removeEventListener("scroll", onScroll);
  };
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section aria-label="Live now" className="relative mt-6">
      <h2 className="px-3 pb-2 text-white text-2xl font-bold">Live now</h2>
      <ul
        ref={listRef}
        className="flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 p-3"flex gap-3 overflow-x-scroll no-scrollbar no-scrollbar scrollbar-hide px-6   p-3 scrollbar-hide"::-webkit-scrollbar]:hidden px-6 p-3"
      >
        {data.map((it, idx) => (
          <li key={`${it.id}-${idx}`} className="min-w-[280px] max-w-[280px] ">
            <Link href={`/watch/${it.id}`} className="block group focus:outline-none">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#00fff5]/30 hover:ring-[#ff1a1a]/70 transition shadow-[0_0_14px_rgba(255,26,26,.25)] hover:shadow-[0_0_24px_rgba(255,26,26,.35)]">
                <Image
                  src={it.img}
                  alt={it.title}
                  width={560}
                  height={320}
                  className="w-full h-[160px] object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 280px, 320px"
                />
                <div className="px-3 py-2 text-white/90 text-sm">{it.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
});
