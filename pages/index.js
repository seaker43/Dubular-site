export default function Home(){
  const card = (t, img, flame=false) => (
    <article className={"card relative bg-[#0c1218] rounded-2xl overflow-hidden " + (flame? "flame":"edge-frame")}>
      <div className="aspect-[16/9] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={t} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-cyan-300 font-semibold">{t}</h3>
      </div>
      <span className="absolute left-3 top-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded">LIVE</span>
    </article>
  );

  const Row = ({title, flame=false, items}) => (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-cyan-300 heading-neon">{title}</h2>
        <a href="/all" className="neon-link px-3 py-1 rounded">See all &gt;</a>
      </div>
      <div className="grid grid-flow-col auto-cols-[78%] xs:auto-cols-[62%] sm:auto-cols-[46%] md:auto-cols-[32%] lg:auto-cols-[28%] gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
        {items.map((v,i)=>(
          <div key={i} className="snap-start">{card(v.title, v.img, flame)}</div>
        ))}
      </div>
    </section>
  );

  const featured = [
    { title: "Studio Session", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" },
    { title: "Coder Cam 24/7", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" }
  ];
  const trending = [
    { title: "Night Raid Tactics #1", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" },
    { title: "Street Battle 9", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" }
  ];

  return (
    <main className="min-h-screen bg-[#0a0f14] text-white px-4 py-6 space-y-12">
      <Row title="Featured Streamers" items={featured} />
      <Row title="Trending" items={trending} flame />
      {/* Fixed bottom bar (simple) */}
      <nav className="fixed bottom-0 inset-x-0 z-40 bg-black/60 backdrop-blur border-t border-white/10">
        <ul className="flex justify-around py-3 text-cyan-300 text-sm">
          <li><a href="#ranks" className="opacity-90">Ranks</a></li>
          <li><a href="#favs" className="opacity-90">Favs</a></li>
          <li><a href="#search" className="opacity-90">Search</a></li>
          <li><a href="#wallet" className="opacity-90">Wallet</a></li>
          <li><a href="#account" className="opacity-90">Account</a></li>
        </ul>
      </nav>
      <div className="h-16" />
    </main>
  );
}
