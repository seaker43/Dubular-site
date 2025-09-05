import DubularLogo from "../components/DubularLogo";
import CategoryRow from "../components/CategoryRow";

export default function Home() {
  const mostWatched=[{title:"Synth City LoFi",tags:["music","lofi"],thumb:"/demo/lofi-1.jpg",live:true}];
  const mostLiked=[{title:"Pixel Art Live",tags:["art","pixel"],thumb:"/demo/art-1.jpg",live:true}];
  const biggestGrinders=[{title:"StreamerA",tags:["hours:112"],thumb:"/demo/var-1.jpg"}];

  return (
    <div className="page">
      <DubularLogo/>
      <h1 className="title">Featured Streamers</h1>
      <CategoryRow title="Trending Now" items={mostWatched}/>
      <CategoryRow title="Most Liked" items={mostLiked}/>
      <CategoryRow title="Biggest Grinders" items={biggestGrinders}/>
    </div>
  );
}
