import CategoryRow from "../components/CategoryRow";

export default function Home() {
  // Helper to generate placeholder items
  const make = (count, seedPrefix, titlePrefix, tags, liveEvery = 3) =>
    Array.from({ length: count }, (_, i) => ({
      title: `${titlePrefix} #${i + 1}`,
      tags,
      img: `https://picsum.photos/seed/${seedPrefix}-${i + 1}/800/450`,
      live: i % liveEvery === 0, // only some items are LIVE
    }));

  // Demo data (replace with API later)
  const mostWatched     = make(12, "watch", "Pixel Art", ["art", "pixel"], 4);
  const mostLiked       = make(12, "liked", "LoFi", ["music", "lofi"], 5);
  const biggestGrinders = make(12, "grind", "Streamer", ["hours: 100+"], 6);

  return (
    <main className="min-h-screen bg-black text-white
                     pb-[calc(72px+env(safe-area-inset-bottom,0px))] pt-4">
      <div className="mx-auto max-w-7xl">
        <CategoryRow title="Trending Now"    items={mostWatched} />
        <CategoryRow title="Most Liked"      items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
      </div>
    </main>
  );
}
