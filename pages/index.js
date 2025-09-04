import CarouselRow from "../ui/CarouselRow";
const trending = [
  { img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format", title:"AI Coding Jam", tags:"coding • synthwave" },
  { img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format", title:"Lo-Fi Study Session", tags:"lofi • chill" },
  { img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format", title:"Night Raid Tactics", tags:"fps • tactics" },
  { img:"https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=1400&auto=format", title:"Street Battle 6", tags:"fighter • tourney" },
];
const recommended = [
  { img:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format", title:"Open World Quest", tags:"rpg • story" },
  { img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format", title:"Tech Builder", tags:"sim • craft" },
  { img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format", title:"Tactics Arena", tags:"strat • ranked" },
  { img:"https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1400&auto=format", title:"Retro Racer", tags:"arcade • drift" },
];

const favs = ([]).concat(typeof trending!=="undefined"?trending:[])
  .concat(typeof recommended!=="undefined"?recommended:[])
  .map((it,i)=>({ ...it, watched: it.watched ?? (1000 - i*37) }))
  .sort((a,b)=>(b.watched||0)-(a.watched||0));

export default function Home(){
  return (
    <main className="page">
      <CarouselRow title="Trending Now" items={trending} seeAllHref="#" />
      <CarouselRow title="Recommended" items={recommended} seeAllHref="#" />
    </main>
  );
}
