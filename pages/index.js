import Head from "next/head";
import MediaRow from "../components/MediaRow";

export default function Home() {
  return (
    <>
      <Head><title>Dubular</title></Head>
      <main className="homepage px-4 pb-24">
        <MediaRow
          title="Trending Now"
          href="/trending"
          category="trending"
          items={[
            { file: "trending1.jpg", title: "LoFi #1", tags: ["music","lofi"], live: true },
            { file: "trending2.jpg", title: "LoFi #2", tags: ["music","lofi"] },
            { file: "trending3.jpg", title: "LoFi #3", tags: ["music","lofi"] },
            { file: "trending4.jpg", title: "LoFi #4", tags: ["music","lofi"] },
            { file: "trending5.jpg", title: "LoFi #5", tags: ["music","lofi"] },
          ]}
        />

        <MediaRow
          title="Art"
          href="/art"
          category="art"
          items={[
            { file: "art1.jpg", title: "Pixel Art #1", tags: ["art","pixel"] },
            { file: "art2.jpg", title: "Pixel Art #2", tags: ["art","pixel"] },
            { file: "art3.jpg", title: "Pixel Art #3", tags: ["art","pixel"] },
          ]}
        />
      </main>
    </>
  );
}
