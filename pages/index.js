import CategoryRow from "../components/CategoryRow";

export default function Home() {
  const mostWatched = Array.from({ length: 8 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    tags: ["music", "lofi"],
    img: `https://picsum.photos/seed/lofi-${i+1}/800/450`,
    live: i % 3 === 0,
  }));

  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    tags: ["art", "pixel"],
    img: `https://picsum.photos/seed/art-${i+1}/800/450`,
  }));

  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: `Streamer${i + 1}`,
    tags: [`hours:${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i+1}/800/450`,
  }));

  return (
    <main className="px-4 pb-24">
      <CategoryRow title="Trending Now" items={mostWatched} />
      <CategoryRow title="Most Liked" items={mostLiked} />
      <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
    </main>
  );
}
