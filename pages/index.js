// pages/index.js
import Head from "next/head";
import MediaRow from "../components/MediaRow";
import FeaturedHero from "../components/FeaturedHero"; // ✅ add this

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular</title>
      </Head>

      <main className="homepage px-4 pb-24">
        {/* ✅ Featured content autoplay block */}
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
          category="trending"
          items={[
            { file: "trending1.jpg", title: "LoFi #1", tags: ["music", "lofi"], live: true },
            { file: "trending2.jpg", title: "LoFi #2", tags: ["music", "lofi"] },
            { file: "trending3.jpg", title: "LoFi #3", tags: ["music", "lofi"] },
            { file: "trending4.jpg", title: "LoFi #4", tags: ["music", "lofi"] },
            { file: "trending5.jpg", title: "LoFi #5", tags: ["music", "lofi"] },
          ]}
        />

        <MediaRow
          title="Art"
          href="/art"
          category="art"
          items={[
            { file: "art1.jpg", title: "Pixel Art #1", tags: ["art", "pixel"] },
            { file: "art2.jpg", title: "Pixel Art #2", tags: ["art", "pixel"] },
            { file: "art3.jpg", title: "Pixel Art #3", tags: ["art", "pixel"] },
          ]}
        />

        <MediaRow
          title="Independent Media"
          href="/independent"
          category="independent"
          items={[
            { file: "independent1.jpg", title: "Indie Film #1", tags: ["indie", "film"] },
            { file: "independent2.jpg", title: "Indie Film #2", tags: ["indie", "film"] },
          ]}
        />
      </main>
    </>
  );
}
