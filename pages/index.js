import CategoryRow from "../components/CategoryRow";
export default function Home(){
  const mostWatched=Array.from({length:8},(_,i)=>({
    title:"LoFi #"+(i+1), tags:["music","lofi"], live:true, thumb:"https://picsum.photos/seed/lofi"+i+"/800/450"
  }));
  const mostLiked=Array.from({length:8},(_,i)=>({
    title:"Pixel Art #"+(i+1), tags:["art","pixel"], live:true, thumb:"https://picsum.photos/seed/art"+i+"/800/450"
  }));
  const biggestGrinders=Array.from({length:8},(_,i)=>({
    title:"Streamer"+(i+1), tags:["hours:"+(100+i*5)], thumb:"https://picsum.photos/seed/var"+i+"/800/450"
  }));
  return (
    <>
      <CategoryRow title="Trending Now" items={mostWatched}/>
      <CategoryRow title="Most Liked" items={mostLiked}/>
      <CategoryRow title="Biggest Grinders" items={biggestGrinders}/>
    </>
  );
}
