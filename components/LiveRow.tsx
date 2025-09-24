"use client";
import Image from "next/image";

const items = [
  { id: "1", title: "Live #1", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" },
  { id: "2", title: "Live #2", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop" },
  { id: "3", title: "Live #3", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" },
];

export default function LiveRow() {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-bold mb-4">Live now</h2>
      <div className="relative rounded-3xl p-[1px] neon-glow">
        <div className="rounded-3xl bg-neutral-900">
          <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory p-4">
            {items.map((it) => (
              <li key={it.id} className="min-w-[300px] max-w-[300px] snap-start">
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#00fff5]/50 hover:ring-[#ff1aff]/70 shadow-[0_0_20px_rgba(0,255,245,.25)] hover:shadow-[0_0_28px_rgba(255,26,255,.35)] transition">
                  <Image src={it.img} alt={it.title} width={600} height={340} className="w-full h-[170px] object-cover" />
                  <div className="px-3 py-2 text-white/90 text-sm">{it.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="neon-sep my-6" />
    </section>
  );
}
