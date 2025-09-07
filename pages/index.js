import CategoryRow from "../components/CategoryRow";

export default function Home() {
  const mostWatched = Array.from({ length: 8 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    tags: ["music", "lofi"],
    img: `https://picsum.photos/seed/lofi-${i + 1}/800/450`,
    live: i % 3 === 0,
  }));

  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    tags: ["art", "pixel"],
    img: `https://picsum.photos/seed/art-${i + 1}/800/450`,
    live: false,
  }));

  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: `Streamer #${i + 1}`,
    tags: [`hours: ${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i + 1}/800/450`,
    live: i % 2 === 0,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f12] to-black">
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <h1 className="sr-only">Dubular</h1>
        <CategoryRow title="Trending Now" items={mostWatched} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
        <div className="h-16" /> 
      </div>
    </main>
  );
}
