import React from "react";
import CategoryRow from "../components/CategoryRow";

export default function Home() {
  // Build some demo data with alternating LIVE flags
  const mostWatched = Array.from({ length: 8 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    tags: ["music", "lofi"],
    img: `https://picsum.photos/seed/lofi-${i + 1}/800/450`,
    live: i % 2 === 0, // even = LIVE
  }));

  const mostLiked = Array.from({ length: 8 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    tags: ["art", "pixel"],
    img: `https://picsum.photos/seed/art-${i + 1}/800/450`,
    live: i % 2 === 0,
  }));

  const biggestGrinders = Array.from({ length: 8 }, (_, i) => ({
    title: `Streamer${i + 1}`,
    tags: [`hours:${100 + i * 5}`],
    img: `https://picsum.photos/seed/var-${i + 1}/800/450`,
    live: i % 2 === 0,
  }));

  return (
    <main className="min-h-dvh bg-[#0b0f12] text-violet-100">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pb-[88px]">
        {/* Rows */}
        <CategoryRow title="Trending Now" items={mostWatched} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />

        {/* Spacer so the fixed bottom bar never covers content */}
        <div className="h-[72px]" />
      </div>
    </main>
  );
}
