// pages/index.js
import Head from "next/head";
import FeaturedHero from "../components/FeaturedHero";
import MediaRow from "../components/MediaRow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="homepage px-4 pb-24 pt-4">
        {/* Featured block (image or .mp4). Make sure the asset exists. */}
        <FeaturedHero
          title="Featured Content"
          src="/thumbnails/trending1.jpg"     // or "/videos/feature.mp4"
          poster="/thumbnails/trending1.jpg"
        />

        {/* Rows — these arrays must not be empty or you'll just see headers */}
        <MediaRow
          title="Trending Now"
          href="/trending"
          items={[
            { file: "trending1.jpg", title: "LoFi #1" },
            { file: "trending2.jpg", title: "LoFi #2" },
            { file: "trending1.jpg", title: "LoFi #3" },
          ]}
        />

        <MediaRow
          title="Art"
          href="/art"
          items={[
            { file: "art1.jpg", title: "Art Drop" },
            { file: "trending2.jpg", title: "Sketches" },
          ]}
        />

        <MediaRow
          title="Independent Media"
          href="/independent"
          items={[
            { file: "indie1.jpg", title: "Indie #1" },
            { file: "trending1.jpg", title: "Indie #2" },
          ]}
        />
      </main>
    </>
  );
}
