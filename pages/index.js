// pages/index.js
import Head from "next/head";
import MediaRow from "../components/MediaRow";
import FeaturedHero from "../components/FeaturedHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular</title>
      </Head>

      <main className="homepage px-4 pb-24">
        {/* Header spacing is handled inside FeaturedHero via mt-? on the info block */}
        <FeaturedHero
          src="/thumbnails/trending/trending1.jpg"
          title="Featured Content"
          autoplay
          muted
          loop
        />

        <MediaRow
          title="Trending Now"
          href="/trending"
          items={[
            { title: "LoFi #1", category: "music", image: "/thumbnails/trending/trending1.jpg", live: true },
            { title: "LoFi #2", category: "music", image: "/thumbnails/trending/trending2.jpg" },
            { title: "LoFi #3", category: "music", image: "/thumbnails/trending/trending3.jpg" },
            { title: "LoFi #4", category: "music", image: "/thumbnails/trending/trending4.jpg" },
            { title: "LoFi #5", category: "music", image: "/thumbnails/trending/trending5.jpg" },
          ]}
        />

        <MediaRow
          title="Most Liked"
          href="/liked"
          items={[
            { title: "Pixel Art #1", category: "art", image: "/thumbnails/art/art1.jpg" },
            { title: "Pixel Art #2", category: "art", image: "/thumbnails/art/art2.jpg" },
            { title: "Pixel Art #3", category: "art", image: "/thumbnails/art/art3.jpg" },
          ]}
        />
      </main>
    </>
  );
}
