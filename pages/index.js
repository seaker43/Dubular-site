import "../styles/home.css";
import Hero from "../ui/Hero";
import CarouselRow from "../ui/CarouselRow";

const make = (arr)=>Array.isArray(arr)?arr:[];

export default function Home() {
  // hydrate from globals if present; fall back to quick demo structure
  const trending = make(globalThis.__TRENDING__) ;
  const recommended = make(globalThis.__RECOMMENDED__);
  const favs = make(globalThis.__FAVS__);

  const demo = (xs)=> xs?.length ? xs : [
    { title:"AI Coding Jam", image:"/demo/beach.jpg", tags:["coding","synthwave"], live:true },
    { title:"Lo-Fi Study Session", image:"/demo/lake.jpg", tags:["lofi","chill"], live:true },
    { title:"Night Raid Tactics", image:"/demo/mountain.jpg", tags:["fps","tactics"], live:true },
  ];

  return (
    <main className="page">
      <Hero />

      <h2 className="section-title" style={{marginTop:12}}>Trending Now</h2>
      <CarouselRow title="Trending Now" items={demo(trending)} />

      <h2 className="section-title" style={{marginTop:2}}>My Favs</h2>
      <CarouselRow title="My Favs" items={demo(favs)} />

      <h2 className="section-title" style={{marginTop:2}}>Recommended</h2>
      <CarouselRow title="Recommended" items={demo(recommended)} />
    </main>
  );
}
