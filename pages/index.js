import DubularMark from "../ui/DubularMark";

const rows = [
  {
    title: "Trending Now",
    items: [
      { img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200", title:"AI Coding Jam", live:true, sub:"coding • synthwave" },
      { img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200", title:"Lo-Fi Study Session", live:true, sub:"music • chill" },
      { img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200", title:"Studio Session", live:true, sub:"creator talk" },
    ],
  },
  {
    title: "Recommended",
    items: [
      { img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200", title:"Street Battle 9", live:true, sub:"gaming • pvp" },
      { img:"https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=1200", title:"Creator Roundtable", live:false, sub:"panel" },
    ],
  },
  {
    title: "Live Channels",
    items: [
      { img:"https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200", title:"Night Raid Tactics #1", live:true, sub:"tactical" },
      { img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200", title:"Speed Art Marathon", live:true, sub:"design" },
    ],
  },
  {
    title: "Popular Now",
    items: [
      { img:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200", title:"Indie Game Devlog", live:false, sub:"dev" },
      { img:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200", title:"Retro Vibes", live:true, sub:"music" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <header>
        <div className="header-inner">
          <div className="header-logo-wrap">
            <DubularMark className="logo" />
          </div>
        </div>
      </header>

      <main>
        {rows.map((row) => (
          <section className="section" key={row.title}>
            <div className="section-head">
              <h2>{row.title}</h2>
              <a className="seeall" href="#">See all &gt;</a>
            </div>
            <div className="row">
              {row.items.map((it, i) => (
                <a className="card" href="#" key={i}>
                  <div className="thumb">
                    <img src={it.img} alt={it.title}/>
                    {it.live && <span className="live">LIVE</span>}
                  </div>
                  <div className="meta">
                    <div className="title">{it.title}</div>
                    {it.sub && <div className="sub">{it.sub}</div>}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
