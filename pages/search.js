import Head from "next/head";
import MediaRow from "../components/MediaRow";

export default function Search() {
  return (
    <>
      <Head>
        <title>Search • Dubular</title>
      </Head>
      <main className="px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-neon mb-6">Find</h1>
        <MediaRow title="Trending Now" href="/trending" items={[{ title: "LoFi #1", category: "music • lofi" },{ title: "LoFi #2", category: "music • lofi" },{ title: "LoFi #3", category: "music • lofi" }]} />
        <MediaRow title="Most Liked" href="/liked" items={[{ title: "Pixel Art #1", category: "art • pixel" },{ title: "Pixel Art #2", category: "art • pixel" }]} />
      </main>
    </>
  );
}
