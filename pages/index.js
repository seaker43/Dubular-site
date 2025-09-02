import Link from "next/link"

export default function Home(){
  // Mock feed items — swap to real data later
  const feed = [
    {
      id: "alpha",
      title: "Speedrun Inferno – World Record Attempts Tonight",
      channel: "AlphaSpeed",
      views: "3.2K watching",
      game: "Infernum IV",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/alpha",
      live: true,
    },
    {
      id: "bravo",
      title: "Pro Arena Finals | Semi-Final Match 2",
      channel: "ArenaX League",
      views: "8.4K watching",
      game: "Arena X",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/bravo",
      live: true,
    },
    {
      id: "charlie",
      title: "Night Raid Tactics – Stealth Only Run",
      channel: "Star Siege Ops",
      views: "1.1K watching",
      game: "Star Siege",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/charlie",
      live: true,
    },
    {
      id: "delta",
      title: "Creative Build-Off: Neon City in 2 Hours",
      channel: "VoxelCreators",
      views: "640 watching",
      game: "VoxelCraft",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
      href: "/stream/delta",
      live: true,
    },
  ]

  return (
    <div style={{marginTop: 8}}>
      {/* Mobile-first vertical feed */}
      <div className="feed">
        {feed.map(v => (
          <Link key={v.id} href={v.href} className="feed-card">
            <div className="thumb16x9">
              <img src={v.img} alt={v.title} />
              <div className="thumb-live">
                {v.live && <span className="chip">● LIVE</span>}
                <span className="chip">{v.views}</span>
                <span className="chip">{v.game}</span>
              </div>
            </div>
            <div className="meta-row">
              <div className="avatar" />
              <div style={{flex:1, minWidth:0}}>
                <div className="title">{v.title}</div>
                <div className="subtitle">
                  {v.channel} • {v.game}
                </div>
              </div>
              {/* optional overflow/menu icon spot */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
