import FeaturedHero from "@/components/FeaturedHero";
import CategoryRow from "@/components/CategoryRow";

function makeFallback(category, count = 12) {
  // Put your images under /public/thumbnails/<category>/<1..n>.jpg or .png
  return Array.from({ length: count }, (_, i) => ({
    id: `${category}-${i + 1}`,
    title: `${category} ${i + 1}`,
    // Update extensions/paths to match your repo assets
    thumb: `/thumbnails/${category}/${i + 1}.jpg`,
    live: (i + 1) % 4 === 0,
  }));
}

export default function Home() {
  const trending = (globalThis.__TRENDING__ && globalThis.__TRENDING__.length)
    ? globalThis.__TRENDING__
    : makeFallback("trending");

  const recommended = (globalThis.__RECOMMENDED__ && globalThis.__RECOMMENDED__.length)
    ? globalThis.__RECOMMENDED__
    : makeFallback("recommended");

  const independent = (globalThis.__INDEPENDENT__ && globalThis.__INDEPENDENT__.length)
    ? globalThis.__INDEPENDENT__
    : makeFallback("independent");

  return (
    <main className="homepage px-4 pb-24">
      <FeaturedHero />

      <CategoryRow title="Trending Now" items={trending} />
      <CategoryRow title="Recommended" items={recommended} />
      <CategoryRow title="Independent Media" items={independent} />
    </main>
  );
}
