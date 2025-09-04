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

      
      <CarouselRow title="Trending Now" items={demo(trending)} />

      
      <CarouselRow title="My Favs" items={demo(favs)} />

      
      <CarouselRow title="Recommended" items={demo(recommended)} />
    </main>
  );
}
