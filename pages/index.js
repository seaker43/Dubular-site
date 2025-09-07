import FeaturedHero from "@/components/FeaturedHero";
import CategoryRow from "@/components/CategoryRow";

export default function Home() {
  return (
    <main className="homepage px-4 pb-24">
      {/* Featured Section */}
      <FeaturedHero />

      {/* Category Rows */}
      <CategoryRow title="Trending Now" items={globalThis.__TRENDING__ || []} />
      <CategoryRow title="Recommended" items={globalThis.__RECOMMENDED__ || []} />
      <CategoryRow title="Independent Media" items={globalThis.__INDEPENDENT__ || []} />
    </main>
  );
}
