import Link from "next/link"

export default function Home(){
  const streams = [
    {
      id: "alpha",
      title: "Speedrun Inferno",
      game: "Infernum IV",
      viewers: "3.2k",
      // “fire ring” vibe image
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/alpha"
    },
    {
      id: "bravo",
      title: "Pro Arena Finals",
      game: "Arena X",
      viewers: "8.4k",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/bravo"
    },
    {
      id: "charlie",
      title: "Night Raid Tactics",
      game: "Star Siege",
      viewers: "1.1k",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/charlie"
    },
    {
      id: "delta",
      title: "Creative Build-Off",
      game: "VoxelCraft",
      viewers: "640",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/delta"
    }
  ]

  return (
    <div style={{marginTop: 8}}>
      {/* HERO */}
      <section className="hero" style={{marginBottom: 20}}>
        <div className="grid">
          <div className="col-12">
            <h1 className="dubular-headline" style={{fontSize: "42px", lineHeight: 1.1, marginBottom: 10}}>
              Stream. Compete. Go Dubular.
            </h1>
            <p style={{opacity:.85, maxWidth: 820, marginBottom: 16}}>
              A fast, creator-first platform with leaderboards and challenge pools handled in chat.
              Clean dark UI, cyan glow accents — no purple here.
            </p>
            <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
              <Link className="btn btn-primary" href="/streams">Browse Streams</Link>
              <Link className="btn" href="/leaderboards">View Rankings</Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE STREAMS GRID */}
      <section className="card" style={{marginBottom: 18}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", marginBottom: 10}}>
          <h2 style={{fontSize:22}}>Live Streams</h2>
          <Link className="btn" href="/streams">Open Streams</Link>
        </div>

        <div className="grid">
          {streams.map(s => (
            <div key={s.id} className="col-4">
              <Link href={s.href} className="thumb">
                <img src={s.img} alt={s.title}/>
                <div className="meta">
                  <span className="badge-live">● LIVE {s.viewers}</span>
                  <span style={{background:"rgba(0,0,0,.55)", padding:"6px 10px", borderRadius:999, border:"1px solid rgba(255,255,255,.15)"}}>
                    {s.game}
                  </span>
                </div>
              </Link>
              <div style={{marginTop:8, fontWeight:600}}>{s.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RANKINGS TEASER */}
      <section className="card" style={{marginBottom: 18}}>
        <h2 style={{fontSize:22, marginBottom:6}}>Rankings</h2>
        <p style={{opacity:.85, marginBottom:10}}>See who’s climbing. Filter by game or timeframe.</p>
        <Link className="btn" href="/leaderboards">See Rankings</Link>
      </section>

      {/* WALLET TEASER */}
      <section className="card">
        <h2 style={{fontSize:22, marginBottom:6}}>Wallet</h2>
        <p style={{opacity:.85, marginBottom:10}}>Manage your balance and recent activity.</p>
        <Link className="btn" href="/wallet">Open Wallet</Link>
      </section>
    </div>
  )
}
