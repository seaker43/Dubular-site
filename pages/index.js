import CategoryRow from "../components/CategoryRow";

export default function Home() {
  const isLive = (i) => (i % 2 === 0);

  const mostWatched = Array.from({ length: 8 }, (_, i) => ({
    title: "LoFi #" + (i + 1),
    tags: ["music", "lofi"],
    img: "https://picsum.photos/seed/lofi-" + (i + 1) + "/800/450",
    live: isLive(i),
  }));

  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: "Pixel Art #" + (i + 1),
    tags: ["art", "pixel"],
    img: "https://picsum.photos/seed/art-" + (i + 1) + "/800/450",
    live: isLive(i),
  }));

  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: "Streamer" + (i + 1),
    tags: ["hours:" + (100 + i * 5)],
    img: "https://picsum.photos/seed/var-" + (i + 1) + "/800/450",
    live: isLive(i),
  }));

  return (
    <main className="min-h-screen bg-neutral-950 text-gray-100 px-4 md:px-6 pb-[84px]">
      <div className="mx-auto max-w-6xl">
        <CategoryRow title="Trending Now" items={mostWatched} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
      </div>
      <div className="h-[72px]" />
    </main>
  );
}
