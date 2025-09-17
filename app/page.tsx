export const dynamic="force-dynamic";
export const fetchCache="force-no-store";
export const revalidate=0;

import HeadTags from "../components/HeadTags.jsx";
import Header from "../components/Header.jsx";
import HomeHero from "../components/HomeHero.js";
import MediaLoopRow from "../components/MediaLoopRow";
import CardGrid from "../components/CardGrid.js";
import BottomBar from "../components/BottomBar.jsx";

// Temporary demo data; replace with real data/supabase later
const trending = Array.from({ length: 8 }).map((_, i) => ({
  title: `LoFi #${i + 1}`,
  href: `/streams/lofi-${i + 1}`,
  imgSrc: `/placeholder.svg`,
}));

export default function Page() {
  return (
    <>
      <HeadTags
        title="Dubular — Home"
        desc="Dubular site"
        url="https://beta.dubular.live"
        image="/og.png"
      />
      <Header />
      <main className="min-h-screen text-white px-4 md:px-6 lg:px-8">
        <section className="py-8">
          <HomeHero />
        </section>

        <section className="py-6">
          <MediaLoopRow title="Trending Now" items={trending} />
        </section>

        <section className="py-6">
          <CardGrid title="Fresh Picks" items={trending} />
        </section>
      </main>

      <BottomBar />
    </>
  );
}
