export default function Home() {
  const mostWatched   = Array.from({ length: 8 }, (_, i) => ({
    live: true, live: true, live: true, title: "LoFi #" + (i + 1),
    tags: ["music","lofi"],
    img: "https://picsum.photos/seed/lofi-" + (i + 1) + "/800/450"
  }));
  const mostLiked     = Array.from({ length: 8 }, (_, i) => ({
    live: true, live: true, live: true, title: "Pixel Art #" + (i + 1),
    tags: ["art","pixel"],
    img: "https://picsum.photos/seed/art-" + (i + 1) + "/800/450"
  }));
  const biggestGrinds = Array.from({ length: 8 }, (_, i) => ({
    live: true, live: true, live: true, title: "Streamer" + (i + 1),
    tags: ["hours:" + (100 + i * 5)],
    img: "https://picsum.photos/seed/var-" + (i + 1) + "/800/450"
  }));

  const CategoryRow = ({ title, items }) => (
    <section className="px-4 sm:px-6 md:px-8 my-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-300 drop-shadow-[0_0_10px_rgba(16,185,129,.35)] mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it, idx) => (
          <a key={idx} href="#" className="snap-start min-w-[72%] sm:min-w-[360px] bg-neutral-900/60 border border-emerald-500/20 rounded-2xl shadow-[0_0_18px_rgba(16,185,129,.18)] overflow-hidden">
            <div className="relative">
              <img src={it.img} alt={it.title} className="w-full h-40 sm:h-48 object-cover" />
              <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">LIVE</span>
            </div>
            <div className="p-3">
              <div className="font-semibold text-lg">{it.title}</div>
              <div className="text-sm text-gray-400">{(it.tags||[]).join(" • ")}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-neutral-950 text-gray-100 min-h-[100svh] pb-[calc(84px+env(safe-area-inset-bottom))]">
      <CategoryRow title="Trending Now"   items={mostWatched} />
      <CategoryRow title="Most Liked"     items={mostLiked} />
      <CategoryRow title="Biggest Grinders" items={biggestGrinds} />

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-500/30 bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
        <div className="mx-auto max-w-screen-md">
          <div className="grid grid-cols-5 gap-1 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
            {[
              { href:"/ranks",  emoji:"📊", label:"Ranks" },
              { href:"/search", emoji:"🔍", label:"Search" },
              { href:"/",       emoji:"🏠", label:"Home", active:true },
              { href:"/wallet", emoji:"💳", label:"Wallet" },
              { href:"/account",emoji:"👤", label:"Account" },
            ].map((it, i)=>(
              <a key={i} href={it.href}
                 className={"flex flex-col items-center justify-center rounded-xl px-3 py-2 text-xs "+
                   (it.active ? "text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-500/30"
                              : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-500/5")}>
                <span className="text-xl leading-none">{it.emoji}</span>
                <span className="mt-1">{it.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
