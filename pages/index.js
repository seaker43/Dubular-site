// pages/index.js
import CategoryRow from "../components/CategoryRow";
import BottomBar from "../components/BottomBar";

export default function Home() {
  // Demo data (swap later for real API)
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
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <h1 className="sr-only">Dubular</h1>

        {/* Rows */}
        <CategoryRow title="Trending Now" items={mostWatched} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />

        {/* Spacer so content doesn't sit under the fixed BottomBar */}
        <div className="h-16" />
      </div>

      {/* Global bottom navigation */}
      <BottomBar />
    </main>
  );
}
