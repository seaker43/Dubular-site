"use client";
import Image from "next/image";

const cards = [
  { title: "Top Streamers",   image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=1100&fit=crop&auto=format" },
  { title: "Top Communities", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=1100&fit=crop&auto=format" },
  { title: "Top Gifters",     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1100&fit=crop&auto=format" },
];

export default function VerticalThumbs() {
  return (
    <section className="w-full flex justify-center px-4 mt-6">
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <article key={i} className="relative rounded-2xl overflow-hidden bg-neutral-900/60 ring-1 ring-white/10 shadow-[0_0_0_2px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="relative w-full aspect-[3/4]">
              <Image src={c.image} alt={c.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 350px" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-center font-semibold text-white drop-shadow">{c.title}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
