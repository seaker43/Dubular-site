import CategoryRow from "../components/CategoryRow";

export default function Home() {
  const mostWatched=[{"title":"LoFi #1","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi0/400/225","live":true},{"title":"LoFi #2","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi1/400/225","live":true},{"title":"LoFi #3","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi2/400/225","live":true},{"title":"LoFi #4","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi3/400/225","live":true},{"title":"LoFi #5","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi4/400/225","live":true},{"title":"LoFi #6","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi5/400/225","live":true},{"title":"LoFi #7","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi6/400/225","live":true},{"title":"LoFi #8","tags":["music","lofi"],"thumb":"https://picsum.photos/seed/lofi7/400/225","live":true}];
  const mostLiked=[{"title":"Pixel Art #1","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art0/400/225","live":true},{"title":"Pixel Art #2","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art1/400/225","live":true},{"title":"Pixel Art #3","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art2/400/225","live":true},{"title":"Pixel Art #4","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art3/400/225","live":true},{"title":"Pixel Art #5","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art4/400/225","live":true},{"title":"Pixel Art #6","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art5/400/225","live":true},{"title":"Pixel Art #7","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art6/400/225","live":true},{"title":"Pixel Art #8","tags":["art","pixel"],"thumb":"https://picsum.photos/seed/art7/400/225","live":true}];
  const biggestGrinders=[{"title":"Streamer1","tags":["hours:100"],"thumb":"https://picsum.photos/seed/var0/400/225"},{"title":"Streamer2","tags":["hours:105"],"thumb":"https://picsum.photos/seed/var1/400/225"},{"title":"Streamer3","tags":["hours:110"],"thumb":"https://picsum.photos/seed/var2/400/225"},{"title":"Streamer4","tags":["hours:115"],"thumb":"https://picsum.photos/seed/var3/400/225"},{"title":"Streamer5","tags":["hours:120"],"thumb":"https://picsum.photos/seed/var4/400/225"},{"title":"Streamer6","tags":["hours:125"],"thumb":"https://picsum.photos/seed/var5/400/225"},{"title":"Streamer7","tags":["hours:130"],"thumb":"https://picsum.photos/seed/var6/400/225"},{"title":"Streamer8","tags":["hours:135"],"thumb":"https://picsum.photos/seed/var7/400/225"}];

  return (
    <div className="page">
      <CategoryRow title="Trending Now" items={mostWatched}/>
      <CategoryRow title="Most Liked" items={mostLiked}/>
      <CategoryRow title="Biggest Grinders" items={biggestGrinders}/>
    </div>
  );
}
