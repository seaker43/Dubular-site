import CategoryRow from "../components/CategoryRow";

export default function Home() {
  const mostWatched = Array.from({ length: 8 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    tags: ["music", "lofi"],
    img: `https://picsum.photos/seed/lofi-${i + 1}/800/450`,
    live: i % 2 === 0
  }));
  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    tags: ["art", "pixel"],
    img: `https://picsum.photos/seed/art-${i + 1}/800/450`,
    live: i % 3 === 0
  }));
  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: `Streamer${i + 1}`,
    tags: [`hours:${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i + 1}/800/450`,
    live: i % 4 === 0
  }));

  return (
    <main className="bg-neutral-950 min-h-screen px-6">
      <CategoryRow title="Trending Now" items={mostWatched} />
      <CategoryRow title="Most Liked" items={mostLiked} />
      <CategoryRow title="Biggest Grinders" items={biggestGrinders} />

      {/* Spacer so bottom bar doesn’t cover content */}
      <div className="h-16" />

      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 inset-x-0 h-16 bg-black/70 backdrop-blur-md border-t border-white/10">
        <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between text-sm">
          <a href="#" className="text-white/80 hover:text-white">Home</a>
          <a href="#" className="text-white/80 hover:text-white">Browse</a>
          <a href="#" className="text-white/80 hover:text-white">Search</a>
          <a href="#" className="text-white/80 hover:text-white">Profile</a>
        </div>
      </div>
    </main>
  );
}
