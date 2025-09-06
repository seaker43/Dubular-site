import CategoryRow from "../components/CategoryRow";

const img = (seed) => `https://picsum.photos/seed/${seed}/800/450`;

export default function Home() {
  // Demo data — some items flagged live
  const mostWatched = Array.from({ length: 10 }, (_, i) => ({
    title: `LoFi #${i + 1}`,
    img: img(`lofi-${i + 1}`),
    tags: ["music", "lofi"],
    live: i % 3 === 0, // every 3rd is live
  }));

  const mostLiked = Array.from({ length: 10 }, (_, i) => ({
    title: `Pixel Art #${i + 1}`,
    img: img(`art-${i + 1}`),
    tags: ["art", "pixel"],
    live: i % 4 === 0,
  }));

  const biggestGrinders = Array.from({ length: 10 }, (_, i) => ({
    title: `Streamer ${i + 1}`,
    img: img(`var-${i + 1}`),
    tags: [`hours:${100 + i * 7}`],
    live: i % 5 === 0,
  }));

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-white px-4 pb-[calc(72px+env(safe-area-inset-bottom))] pt-4">
      {/* Hero / Featured */}
      <section className="mb-8">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl ring-1 ring-[rgba(24,226,122,.22)] bg-black/40 shadow-[0_0_40px_rgba(24,226,122,.12)]">
          <img
            src={img("featured-1")}
            alt="Featured stream"
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(24,226,122,.15),transparent_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <div>
              <p className="text-[12px] text-white/70">Featured Stream</p>
              <h1 className="text-[clamp(18px,5vw,28px)] font-semibold tracking-wide">
                Chill Beats to Code/Study
              </h1>
            </div>
            <button className="rounded-full border border-[rgba(24,226,122,.35)] bg-[rgba(24,226,122,.12)] px-3 py-1.5 text-[13px] font-semibold text-[color:#18e27a] shadow-[0_0_18px_rgba(24,226,122,.35)]">
              Watch
            </button>
          </div>
        </div>
      </section>

      {/* Rows */}
      <CategoryRow title="Trending Now" items={mostWatched} />
      <CategoryRow title="Most Liked" items={mostLiked} />
      <CategoryRow title="Biggest Grinders" items={biggestGrinders} />

      {/* Spacer so the fixed bottom bar never covers content */}
      <div className="h-[72px]" />
    </main>
  );
}
