<<<<<<< HEAD
import CategoryRow from "../components/CategoryRow";

export default function TrendingPage() {
  const trending = Array.from({ length: 8 }, (_, i) => ({
    title: `Trending #${i + 1}`,
    img: `https://picsum.photos/seed/trend-${i + 1}/800/450`,
    tags: ["trending"],
    live: i % 3 === 0,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f12] to-black">
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white my-6">
          Trending
        </h1>
        <CategoryRow title="Trending Now" items={trending} />
      </div>
    </main>
  );
}
=======
import Link from "next/link";
import CarouselRow from "../components/CategoryRow";
export default function Trending(){const items=globalThis.__TRENDING__||[];return(<main className="page"><h2 className="section-title glow"><Link href="/trending">Trending Now</Link></h2><CarouselRow title="Trending Now" items={items}/></main>);} 
>>>>>>> 63785215 (fix(pages): replace ../components/CategoryRow with components/CategoryRow everywhere)
