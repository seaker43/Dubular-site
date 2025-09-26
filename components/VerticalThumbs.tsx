"use client";
import Image from "next/image";

const cards = [
  { title: "Top Streamers",   img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200" },
  { title: "Top Communities", img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200" },
  { title: "Top Gifters",     img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200" },
];

export default function VerticalThumbs() {
  return (
    <section className="mt-6 w-full px-4">
      {/* fixed 3-up on all breakpoints */}
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4">
        {cards.map((c) => (
          <a key={c.title} href="#" className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_0_0_2px_rgba(255,255,255,0.06)]">
            <div className="relative w-full aspect-[3/4]">
              <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
              <span className="rounded-md bg-black/55 px-2 py-1 text-sm font-medium text-white">{c.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
