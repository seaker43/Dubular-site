import CategoryRow from "../components/CategoryRow";
import BottomBar from "../components/BottomBar";

export default function Home() {
  const trending = Array.from({ length: 6 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    tags: ["music", "lofi"],
    img: `https://picsum.photos/seed/lofi-${i + 1}/800/450`,
    live: i % 3 === 0, // every 3rd is live
  }));

  const mostLiked = Array.from({ length: 6 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    tags: ["art", "pixel"],
    img: `https://picsum.photos/seed/art-${i + 1}/800/450`,
    live: false,
  }));

  const biggestGrinders = Array.from({ length: 6 }, (_, i) => ({
    title: `Streamer #${i + 1}`,
    tags: [`hours:${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i + 1}/800/450`,
    live: i % 2 === 0, // every 2nd is live
  }));

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 pb-20">
        {/* Logo header */}
        <h1 className="text-3xl font-bold text-cyan-400 py-6">Dubular</h1>

        {/* Rows */}
        <CategoryRow title="Trending Now" items={trending} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />

        {/* Spacer before bottom bar */}
        <div className="h-16" />
      </div>

      {/* Fixed Bottom Navigation */}
      <BottomBar />
    </main>
  );
}
