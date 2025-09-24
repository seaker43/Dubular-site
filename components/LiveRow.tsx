"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Item = { id: string; title: string; img: string };
const items: Item[] = [
  { id: "live-1", title: "Live #1", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-2", title: "Live #2", img: "https://images.unsplash.com/photo-1600855944280-818d239f5c25?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-3", title: "Live #3", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" },
  { id: "live-4", title: "Live #4", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop" },
];
const loop = [...items, ...items, ...items]; // middle set = true start

export default function LiveRow() {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start in the middle set so we can scroll "endlessly"
    const oneSet = el.scrollWidth / 3;
    el.scrollLeft = oneSet + 1;

    const onScroll = () => {
      const x = el.scrollLeft;
      // if we get too close to the cloned edges, jump by one set (no animation)
      if (x < oneSet * 0.1) el.scrollLeft = x + oneSet;
      else if (x > oneSet * 1.9) el.scrollLeft = x - oneSet;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section aria-label="Live now" className="relative mt-6">
      {/* red neon rail/glow behind the row */}
      <div className="pointer-events-none absolute inset-x-0 -top-4 h-8 blur-2xl bg-[radial-gradient(60%_140%_at_50%_0%,rgba(255,26,26,.45),transparent_70%)]" />
      <ul
        ref={ref}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory p-3 scroll-smooth scroll-fade rounded-3xl ring-1 ring-[#ff1a1a]/25 shadow-[0_0_34px_rgba(255,26,26,.20)] bg-black/20"
      >
        {loop.map((it, i) => (
          <li key={`${it.id}-${i}`} className="min-w-[280px] max-w-[280px] snap-start">
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
