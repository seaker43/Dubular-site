import Link from "next/link"

const rows = [
  {
    key:"mobile-games", title:"Mobile Streams", seeAll:"/streams?cat=mobile",
    type:"grid"
  },
  {
    key:"top10", title:"Top 10 Live", seeAll:"/streams?sort=top",
    type:"top10"
  },
  {
    key:"continue", title:"Continue Watching", seeAll:"/streams?filter=continue",
    type:"default"
  }
]

// demo data (replace with API later)
const demo = [
  { id:"alpha",  title:"Speedrun Inferno – WR Pace",       cover:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400" },
  { id:"bravo",  title:"Pro Arena Finals – Semis",         cover:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400" },
  { id:"charli", title:"Night Raid Tactics",               cover:"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400" },
  { id:"delta",  title:"Creative Build-Off",               cover:"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400" },
  { id:"echo",   title:"Dungeon Crawler Marathon",         cover:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400" },
  { id:"fox",    title:"FPS Showdown",                      cover:"https://images.unsplash.com/photo-1580128637393-98d03c646f83?q=80&w=1400" },
  { id:"golf",   title:"Battle Royale 24/7",               cover:"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400" },
  { id:"hotel",  title:"MMORPG Raid Party",                 cover:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400" },
  { id:"india",  title:"Retro Gaming Classics",             cover:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400" }
]

function PlayIcon(){return(<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7-11-7z"/></svg>)}
function InfoIcon(){return(<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 15V11h-2v6h2Zm0-8V7h-2v2h2Z"/></svg>)}
function DotsIcon(){return(<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M6 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>)}

export default function Home(){
  const top10 = demo.slice(0,7)
  const grid  = demo.slice(2)
  const cont  = demo.slice(1,8)

  return (
    <div>
      {/* Row 1: Mobile Streams (standard cards) */}
      <section className="row">
        <div className="row-head">
          <h2>Mobile Streams</h2>
          <Link href="/streams?cat=mobile">See all</Link>
        </div>
        <div className="scroll-x">
          {grid.map(v=>(
            <Link key={v.id} href={`/stream/${v.id}`} className="card-16x9">
              <div className="thumb16x9">
                <img src={v.cover} alt={v.title}/>
                <div className="thumb-overlay">
                  <div>
                    <div className="card-title">{v.title}</div>
                    <div className="chip">Live</div>
                  </div>
                  <div className="ctrl-row">
                    <div className="ctrl" title="Play"><PlayIcon/></div>
                    <div className="ctrl" title="Info"><InfoIcon/></div>
                    <div className="ctrl" title="More"><DotsIcon/></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Row 2: Top 10 with giant outline numbers */}
      <section className="row">
        <div className="row-head">
          <h2>Top 10 Live</h2>
          <Link href="/streams?sort=top">See all</Link>
        </div>
        <div className="scroll-x">
          {top10.map((v,i)=>(
            <Link key={v.id} href={`/stream/${v.id}`} className="card-top10">
              <div className="rank-num">{i+1}</div>
              <div className="thumb16x9">
                <img src={v.cover} alt={v.title}/>
                <div className="thumb-overlay">
                  <div className="card-title">{v.title}</div>
                  <div className="ctrl-row">
                    <div className="ctrl"><PlayIcon/></div>
                    <div className="ctrl"><InfoIcon/></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Row 3: Continue Watching */}
      <section className="row">
        <div className="row-head">
          <h2>Continue Watching</h2>
          <Link href="/streams?filter=continue">See all</Link>
        </div>
        <div className="scroll-x">
          {cont.map(v=>(
            <Link key={v.id} href={`/stream/${v.id}`} className="card-16x9">
              <div className="thumb16x9">
                <img src={v.cover} alt={v.title}/>
                <div className="thumb-overlay">
                  <div className="card-title">{v.title}</div>
                  <div className="ctrl-row">
                    <div className="ctrl"><PlayIcon/></div>
                    <div className="ctrl"><InfoIcon/></div>
                    <div className="ctrl"><DotsIcon/></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
