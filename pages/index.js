import CategoryRow from "../components/CategoryRow";

export default function Home() {
  const mostWatched = Array.from({ length: 8 }, (_, i) => ({
    title: `LoFi #${i+1}`,
    tags: ["music","lofi"],
    thumb: `https://picsum.photos/seed/lofi${i}/400/225`,
    live: true,
  }));
  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: `Pixel Art #${i+1}`,
    tags: ["art","pixel"],
    thumb: `https://picsum.photos/seed/art${i}/400/225`,
    live: true,
  }));
  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: `Streamer${i+1}`,
    tags: [`hours:${100+i*5}`],
    thumb: `https://picsum.photos/seed/var${i}/400/225`,
  }));

  return (
    <main className="pb-24 bg-neutral-950 text-white min-h-screen">
      <h1 className="sr-only">Dubular</h1>
      <CategoryRow title="Trending Now" items={mostWatched} />
      <CategoryRow title="Most Liked" items={mostLiked} />
      <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
    </main>
  );
}
