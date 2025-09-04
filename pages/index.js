import Head from "next/head";
import DubularMark from "../ui/DubularMark.jsx";

import Image from "next/image";
import Link from "next/link";

const demo = {
  trending: [
    { id: 1, title: "AI Coding Jam", tags: "coding • synthwave", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop" , live:true },
    { id: 2, title: "Lo-Fi Study Session", tags: "lofi • chill", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1800&auto=format&fit=crop", live:true },
    { id: 3, title: "Night Raid Tactics", tags: "fps • tactics", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop" }
  ],
  recommended: [
    { id: 4, title: "Street Battle 6", tags: "fighter • tourney", img: "https://images.unsplash.com/photo-1498654077810-12f23b3b1d54?q=80&w=1800&auto=format&fit=crop", live:true },
    { id: 5, title: "Indie Dev Live", tags: "gamedev • pixel", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop" },
    { id: 6, title: "Retro Speedrun", tags: "retro • speedrun", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1800&auto=format&fit=crop" }
  ],
  live: [
    { id: 7, title: "Music Production", tags: "daw • synth", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1800&auto=format&fit=crop", live:true },
    { id: 8, title: "Art & Chill", tags: "procreate • relax", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1800&auto=format&fit=crop", live:true },
    { id: 9, title: "VR Sandbox", tags: "vr • physics", img: "https://images.unsplash.com/photo-1520975922284-7b683c1c6642?q=80&w=1800&auto=format&fit=crop" }
  ],
  popular: [
    { id:10, title:"Open World Quest", tags:"rpg • story", img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1800&auto=format&fit=crop" },
    { id:11, title:"Tactics Arena", tags:"strategy", img:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1800&auto=format&fit=crop" },
    { id:12, title:"Coffee & Code", tags:"live coding", img:"https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1800&auto=format&fit=crop" }
  ]
};

function Shelf({title, href, items}) {
  return (
    <section className="section">
      <div className="bar">
        <h2 className="h2">{title}</h2>
        <Link className="seeall" href={href || "#"}>See all &gt;</Link>
      </div>
      <div className="shelf">
        {items.map(x => (
          <article className="item" key={x.id}>
            <div className="card">
              <img className="thumb" src={x.img} alt={x.title}/>
              <div className="overlay" />
              <div className="meta">
                {x.live && <span className="badge">LIVE</span>}
                <h3 className="title">{x.title}</h3>
                <div className="sub">{x.tags}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home(){
  return (
    <>
      <Head><title>Dubular</title></Head>
      <header className="header">
        <div className="header-inner">
          <div className="header-logo-wrap">
        <DubularMark size={220} />
     <DubularMark className="logo" />
   </div>
        </div>
      </header>
      <main className="main">
        <Shelf title="Trending Now" href="#" items={demo.trending}/>
        <Shelf title="Recommended" href="#" items={demo.recommended}/>
        <Shelf title="Live Channels" href="#" items={demo.live}/>
        <Shelf title="Popular Now" href="#" items={demo.popular}/>
      </main>
    </>
  );
}
