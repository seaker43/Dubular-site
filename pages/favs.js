import CarouselRow from "../ui/CarouselRow";

export default function Favs(){
  const favs = ([]).concat(typeof trending!=="undefined"?trending:[])
    .concat(typeof recommended!=="undefined"?recommended:[])
    .map((it,i)=>({ ...it, watched: it.watched ?? (1000 - i*37) }))
    .sort((a,b)=>(b.watched||0)-(a.watched||0));
  return (
    <main className="page">
      <h2 className="section-title glow">My Favs</h2>
      <CarouselRow title="My Favs" items={favs} />
    </main>
  );
}
