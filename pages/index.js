// pages/index.js
import CategoryRow from "../components/CategoryRow";
import BottomBar from "../components/BottomBar";

export default function Home() {
  // --- Data mocks (replace with real data when wired up) ---
  const mostWatched = Array.from({ length: 8 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    tags: ["music", "lofi"],
    img: `https://picsum.photos/seed/lofi-${i + 1}/800/450`,
    // LIVE every 3rd card
    live: i % 3 === 0,
  }));

  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    tags: ["art", "pixel"],
    img: `https://picsum.photos/seed/art-${i + 1}/800/450`,
    // Not live; shows small green idle pulse
    live: false,
  }));

  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: `Streamer #${i + 1}`,
    tags: [`hours:${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i + 1}/800/450`,
    // LIVE occasionally
    live: i % 4 === 0,
  }));

  return (
    <main className="page">
      <h1 className="site-title">Dubular</h1>

      <CategoryRow title="Trending Now" items={mostWatched} />
      <CategoryRow title="Most Liked" items={mostLiked} />
      <CategoryRow title="Biggest Grinders" items={biggestGrinders} />

      {/* Spacer so content isn't hidden behind the bottom bar */}
      <div className="h-24" />

      <BottomBar />
    </main>
  );
}
