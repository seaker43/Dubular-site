"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Item = { id: string; title: string; img: string };
type ItemWithUid = Item & { uid: string };

const seed: Item[] = [
  { id: "live-1", title: "Live #1", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-2", title: "Live #2", img: "https://images.unsplash.com/photo-1600855944280-818d239f5c25?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-3", title: "Live #3", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-4", title: "Live #4", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop" },
];

export default function LiveRow() {
  const [data, setData] = useState<ItemWithUid[]>(
    () => Array.from({ length: 3 }, (_, r) =>
            seed.map((it, i) => ({ ...it, uid: `r${r}-i${i}-${it.id}` }))
          ).flat()
  );

  const listRef = useRef<HTMLUListElement>(null);
  const cardWRef = useRef(0);

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const first = el.querySelector("li") as HTMLElement | null;
    if (!first) return;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "12") || 12;
    cardWRef.current = first.offsetWidth + gap;
    const oneSetWidth = cardWRef.current * seed.length;
    el.scrollLeft = oneSetWidth + 1;
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
        const maxBeforeEnd = el.scrollWidth - el.clientWidth - threshold();

        if (left > maxBeforeEnd) {
          setData(prev => {
            const [first, ...rest] = prev;
            requestAnimationFrame(() => { el.scrollLeft -= cardWRef.current; });
            return [...rest, first];
          });
        } else if (left < threshold()) {
          setData(prev => {
            const last = prev[prev.length - 1];
            const rest = prev.slice(0, -1);
            requestAnimationFrame(() => { el.scrollLeft += cardWRef.current; });
            return [last, ...rest];
          });
        }
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section aria-label="Live now" className="relative mt-6">
      <h2 className="px-3 pb-2 text-white text-2xl font-bold">Live now</h2>
      <ul
        ref={listRef}
        className="flex gap-3 overflow-x-auto px-6 p-3 snap-x snap-proximity rounded-3xl ring-1 ring-[#ff1a1a]/25
                   [scrollbar-width:none] [-ms-overflow-style:none] 
                   [&::-webkit-scrollbar]:hidden"
      >
        {data.map((it, idx) => (
          <li key={it.uid} className="shrink-0 min-w-[280px] max-w-[280px] snap-start snap-always">
            <Link href={`/watch/${it.id}`} className="block group focus:outline-none">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#00fff5]/35 shadow-[0_0_22px_rgba(255,26,26,.30)] hover:shadow-[0_0_34px_rgba(255,26,26,.45)] transition
                              shadow-[0_0_14px_rgba(0,255,245,.18)] group-hover:shadow-[0_0_24px_rgba(255,26,255,.28)]">
                <Image
                  src={it.img}
                  alt={it.title}
                  width={560}
                  height={320}
                  className="w-full h-[160px] object-cover"
                  loading={idx < 3 ? "eager" : "lazy"}
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
}
