"use client";

export default function LiveRow() {
  // Placeholder items so the row always renders; swap with real data later.
  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: `Live #${i + 1}`,
  }));

  return (
    <section className="mt-6 px-4">
      <h2 className="mb-3 text-lg font-semibold text-white/90">
        Live now
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map(({ id, title }) => (
          <a
            key={id}
            className="group relative h-28 w-[180px] shrink-0 rounded-xl bg-gradient-to-b from-[#00fff5]/10 to-[#ff00ff]/10 ring-1 ring-white/10 hover:ring-[#00fff5]/40 transition"
          >
            <div className="absolute inset-0 rounded-xl bg-[radial-gradient(closest-side,_rgba(255,0,255,0.2),_transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 rounded-xl bg-neutral-900/60 backdrop-blur-[1px]" />
            <div className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white/90 drop-shadow-[0_0_10px_rgba(0,255,255,0.9)]">
              {title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
