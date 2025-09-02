import Link from "next/link"

export default function Home(){
  // Mock categories
  const categories = [
    {
      title: "Trending Now",
      items: [
        {id:"alpha", title:"Speedrun Inferno – World Record", img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400", href:"/stream/alpha"},
        {id:"bravo", title:"Pro Arena Finals", img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400", href:"/stream/bravo"},
        {id:"charlie", title:"Night Raid Tactics", img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400", href:"/stream/charlie"},
      ]
    },
    {
      title: "Recommended For You",
      items: [
        {id:"delta", title:"Creative Build-Off", img:"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400", href:"/stream/delta"},
        {id:"echo", title:"Dungeon Crawler Marathon", img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400", href:"/stream/echo"},
        {id:"foxtrot", title:"FPS Showdown", img:"https://images.unsplash.com/photo-1580128637393-98d03c646f83?q=80&w=1400", href:"/stream/foxtrot"},
      ]
    },
    {
      title: "Live Now",
      items: [
        {id:"golf", title:"Battle Royale 24/7", img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400", href:"/stream/golf"},
        {id:"hotel", title:"MMORPG Raid Party", img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400", href:"/stream/hotel"},
        {id:"india", title:"Retro Gaming Classics", img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400", href:"/stream/india"},
      ]
    }
  ]

  return (
    <div>
      {categories.map(cat => (
        <div className="row" key={cat.title}>
          <h2>{cat.title}</h2>
          <div className="scroll-x">
            {cat.items.map(item => (
              <Link key={item.id} href={item.href} className="scroll-card">
                <div className="thumb16x9">
                  <img src={item.img} alt={item.title}/>
                </div>
                <div className="title" style={{marginTop:6}}>{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
