// pages/index.js
import CategoryRow from "../components/CategoryRow";
import BottomBar from "../components/BottomBar";

export default function Home() {
  // Fake content — replace with your real data later
  const trending = Array.from({ length: 8 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    tags: ["music", "lofi"],
    img: `https://picsum.photos/seed/lofi-${i + 1}/800/450`,
    live: i % 3 === 0,
  }));

  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    tags: ["art", "pixel"],
    img: `https://picsum.photos/seed/art-${i + 1}/800/450`,
    live: i % 4 === 0,
  }));

  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: `Streamer ${i + 1}`,
    tags: [`hours:${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i + 1}/800/450`,
    live: i % 5 === 0,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f12] to-black">
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <h1 className="sr-only">Dubular</h1>

        <CategoryRow title="Trending Now" items={trending} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />

        <div className="h-16" />
      </div>

      <BottomBar />
    </main>
  );
}
