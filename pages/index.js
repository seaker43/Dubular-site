import BottomBar from "../components/BottomBar";
import CategoryRow from "../components/CategoryRow";

export default function Home() {
  // demo data with remote thumbs (keeps Next/Image out of the way)
  const mostWatched = Array.from({ length: 8 }, function (_, i) {
    return {
      title: "LoFi #" + (i + 1),
      tags: ["music", "lofi"],
      thumb: "https://picsum.photos/seed/lofi-" + (i + 1) + "/400/225",
      live: true,
    };
  });
  const mostLiked = Array.from({ length: 8 }, function (_, i) {
    return {
      title: "Pixel Art #" + (i + 1),
      tags: ["art", "pixel"],
      thumb: "https://picsum.photos/seed/art-" + (i + 1) + "/400/225",
      live: true,
    };
  });
  const biggestGrinders = Array.from({ length: 8 }, function (_, i) {
    return {
      title: "Streamer" + (i + 1),
      tags: ["hours:" + (100 + i * 5)],
      thumb: "https://picsum.photos/seed/var-" + (i + 1) + "/400/225",
    };
  });

  return (
    <div className="min-h-screen bg-black text-white pb-safe pt-6 px-4">
      <main className="max-w-[1000px] mx-auto">
        <CategoryRow title="Trending Now" items={mostWatched} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
      </main>
      <BottomBar />
    </div>
  );
}
