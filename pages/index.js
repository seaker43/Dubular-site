// pages/index.js
import Head from "next/head";
import MediaRow from "../components/MediaRow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular</title>
      </Head>

      <main className="px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neon drop-shadow-glow mb-6">
          Dubular
        </h1>

        <MediaRow
          title="Trending Now"
          href="/trending"
          items={[
            { title: "LoFi #1", category: "music", tag: "lofi", live: true, imgSrc: "/thumbs/music/lofi-1.jpg", href: "/streams/lofi-1" },
            { title: "LoFi #2", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-2.jpg", href: "/streams/lofi-2" },
            { title: "LoFi #3", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-3.jpg", href: "/streams/lofi-3" },
          ]}
        />

        <MediaRow
          title="Most Liked"
          href="/most-liked"
          items={[
            { title: "Pixel Art #1", category: "art", tag: "pixel", imgSrc: "/thumbs/art/pixel-1.jpg", href: "/art/1" },
            { title: "Pixel Art #2", category: "art", tag: "pixel", imgSrc: "/thumbs/art/pixel-2.jpg", href: "/art/2" },
            { title: "Pixel Art #3", category: "art", tag: "pixel", imgSrc: "/thumbs/art/pixel-3.jpg", href: "/art/3" },
          ]}
        />

        <MediaRow
          title="Recommended"
          href="/recommended"
          items={[
            { title: "LoFi #2", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-2.jpg", href: "/streams/lofi-2" },
            { title: "Pixel Art #1", category: "art", tag: "pixel", imgSrc: "/thumbs/art/pixel-1.jpg", href: "/art/1" },
            { title: "LoFi #4", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-4.jpg", href: "/streams/lofi-4" },
          ]}
        />
      </main>
    </>
  );
}
