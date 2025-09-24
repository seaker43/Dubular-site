"use client";

import Image from "next/image";

export default function LiveRow() {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Live #${i + 1}`,
    thumb: `https://picsum.photos/400/225?random=${i}`, // stable placeholder
  }));

  return (
    <section className="mt-6 px-4">
      <h2 className="mb-3 text-lg font-semibold text-white/90">Live now</h2>
      <div className="flex gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map(({ id, title, thumb }) => (
          <div
            key={id}
            className="relative w-[180px] shrink-0 rounded-xl overflow-hidden ring-2 ring-[#00fff5]/60 hover:ring-[#ff00ff]/80 transition"
          >
            <Image
              src={thumb}
              alt={title}
              width={400}
              height={225}
              className="h-28 w-full object-cover"
            />
            <div className="absolute bottom-1 left-2 text-xs font-medium text-white drop-shadow-[0_0_6px_rgba(0,255,255,0.9)]">
              {title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
