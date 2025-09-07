import CategoryRow from "../components/CategoryRow";

export default function RecommendedPage() {
  const recs = Array.from({ length: 8 }, (_, i) => ({
    title: `Recommended #${i + 1}`,
    img: `https://picsum.photos/seed/rec-${i + 1}/800/450`,
    tags: ["recommended"],
    live: i % 5 === 0,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f12] to-black">
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white my-6">
          Recommended
        </h1>
        <CategoryRow title="Because you liked…" items={recs} />
      </div>
    </main>
  );
}
