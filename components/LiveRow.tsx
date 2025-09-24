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
  // we render more than one set so users can scroll immediately
  const [data, setData] = useState<Item[]>(() => [...seed, ...seed, ...seed]);
  const listRef = useRef<HTMLUListElement>(null);
  const cardWRef = useRef<number>(0);
  const gapRef = useRef<number>(12); // Tailwind gap-3 ~ 12px

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const first = el.querySelector("li") as HTMLElement | null;
    if (first) {
      const styles = getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "12") || 12;
      gapRef.current = gap;
      cardWRef.current = first.offsetWidth + gap;
      // start at the middle set so both directions are available
      const oneSetWidth = cardWRef.current * seed.length;
      el.scrollLeft = oneSetWidth + 1;
    }
  }, []);

  // Seamless loop by recycling items without visual jump
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    let ticking = false;
    const threshold = () => Math.max(24, cardWRef.current * 0.5);
    const oneSet = () => cardWRef.current * seed.length;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const left = el.scrollLeft;
        const maxBeforeEnd = el.scrollWidth - el.clientWidth - threshold();

        // Near right edge: move first card(s) to the end and keep scroll position
        if (left > maxBeforeEnd) {
          setData(prev => {
            // rotate by 1 item (keeps it smooth)
            const [first, ...rest] = prev;
            // after DOM reflow, shift scrollLeft back by one card width so it doesn't jump
            requestAnimationFrame(() => { el.scrollLeft -= cardWRef.current; });
            return [...rest, first];
          });
        }

        // Near left edge: move last card(s) to the start and advance scroll to compensate
        else if (left < threshold()) {
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
      {/* red neon rail behind the row */}
      <div className="pointer-events-none absolute inset-x-0 -top-4 h-8 blur-2xl bg-[radial-gradient(60%_140%_at_50%_0%,rgba(255,26,26,.45),transparent_70%)]" />
      <h2 className="px-3 pb-2 text-white text-2xl font-bold">Live now</h2>
      <ul
        ref={listRef}
        className="flex gap-3 overflow-x-auto px-6 snap-x snap-mandatory p-3 scroll-smooth rounded-3xl ring-1 ring-[#ff1a1a]/25 shadow-[0_0_34px_rgba(255,26,26,.20)] bg-black/20"
      >
        {data.map((it, idx) => (
          <li key={`${it.id}-${idx}`} className="min-w-[280px] max-w-[280px] snap-start">
            <Link href={`/watch/${it.id}`} className="block group focus:outline-none">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#00fff5]/35 group-hover:ring-[#ff1aff]/70 transition shadow-[0_0_14px_rgba(0,255,245,.18)] group-hover:shadow-[0_0_24px_rgba(255,26,255,.28)]">
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
}
