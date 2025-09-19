/* No toggle. Header → Featured Loop Hero → Live Channels (red glow) → 3 vertical thumbs */
const logoSrcs = ["/dubular2.v2.svg", "/dubular2.v2.png", "/dubular2.v2.webp"];

const liveChannels = [
  { id: "l1", title: "Pro League • Match Day", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200" },
  { id: "l2", title: "City News Live",        img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200" },
  { id: "l3", title: "Music Festival",         img: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&w=1200" },
  { id: "l4", title: "Esports Arena",          img: "https://images.unsplash.com/photo-1511629091441-ee46146481b0?q=80&w=1200" },
];

const verticals = [
  { id: "v1", title: "Drama Mini",   img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=800" },
  { id: "v2", title: "Food Vibes",   img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800" },
  { id: "v3", title: "Street Dance", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800" },
];

function Header() {
  return (
    <header className="w-full bg-neutral-950/80 backdrop-blur sticky top-0 z-40 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        {logoSrcs.map((src) => (
          <img
            key={src}
            src={src}
            onError={(e) => { const el = e.currentTarget; const next = logoSrcs[logoSrcs.indexOf(src)+1]; if (next) el.src = next; }}
            alt="dubUlar"
            className="h-8 w-auto select-none"
          />
        )).slice(0,1)}
        <span className="text-cyan-400/80 font-semibold tracking-wide ml-1">dubUlar</span>
      </div>
    </header>
  );
}

function FeaturedLoopHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[16/7] border border-neutral-800">
        {/* If /hero.mp4 exists it will play; otherwise the poster keeps things pretty */}
        <video
          className="h-full w-full object-cover"
          src="/hero.mp4"
          poster="/hero.jpg"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">Featured</h1>
          <p className="text-neutral-300 text-sm md:text-base">Hand-picked stream just for you</p>
        </div>
      </div>
    </section>
  );
}

function LiveBadge() {
  return (
    <span className="absolute left-2 top-2 text-[11px] font-bold tracking-wide px-2 py-0.5 rounded-full
                     bg-red-600 text-white shadow-[0_0_12px_rgba(239,68,68,0.9)]">
      LIVE
    </span>
  );
}

function LiveCard({ title, img }) {
  return (
    <div
      className="relative min-w-[280px] md:min-w-[340px] aspect-video rounded-xl overflow-hidden bg-neutral-900
                 border border-neutral-800 ring-1 ring-red-500/20
                 shadow-[0_0_30px_rgba(239,68,68,0.35)]
                 hover:shadow-[0_0_55px_rgba(239,68,68,0.65)] transition-shadow"
      title={title}
    >
      <img src={img} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
      <LiveBadge />
      <div className="absolute left-3 bottom-2 text-sm font-medium text-red-200 drop-shadow">
        {title}
      </div>
    </div>
  );
}

function VerticalCard({ title, img }) {
  return (
    <div
      className="relative w-[160px] md:w-[200px] aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900
                 border border-neutral-800 hover:border-neutral-700 transition"
      title={title}
    >
      <img src={img} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-neutral-950/80 to-transparent">
        <p className="text-[12px] text-neutral-200 line-clamp-2">{title}</p>
      </div>
    </div>
  );
}

export default function LegacyHome() {
  return (
    <main className="min-h-screen bg-neutral-950 text-cyan-100">
      <Header />
      <FeaturedLoopHero />

      {/* Live Channels row with red glow */}
      <section className="mx-auto max-w-6xl px-4 pt-6">
        <h2 className="text-cyan-300 font-semibold mb-3">Live Channels</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {liveChannels.map((c) => <LiveCard key={c.id} {...c} />)}
        </div>
      </section>

      {/* Three vertical thumbnails */}
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-16">
        <div className="grid grid-cols-3 max-md:grid-cols-3 gap-4 place-items-start">
          {verticals.map((v) => <VerticalCard key={v.id} {...v} />)}
        </div>
      </section>
    </main>
  );
}
