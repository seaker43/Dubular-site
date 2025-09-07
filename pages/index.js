// pages/index.js
import CategoryRow from "../components/CategoryRow";
import BottomBar from "../components/BottomBar";

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
    tags: [`hours:${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i + 1}/800/450`,
    live: i % 4 === 0,
  }));

  return (
    <div className="min-h-screen pb-20">
      <header className="px-4 py-5">
        <h1 className="text-3xl font-extrabold glow">Dubular</h1>
      </header>

      <main className="px-4">
        <CategoryRow title="Trending Now" items={mostWatched} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
      </main>

      <BottomBar />
    </div>
  );
}
