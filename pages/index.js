// pages/index.js
import Head from "next/head";
import FeaturedHero from "@/components/FeaturedHero";
import MediaRow from "@/components/MediaRow";

export default function Home() {
  return (
    <>
      <Head><title>Dubular</title></Head>

      {/* Featured auto-playing hero */}
      <FeaturedHero
        title="LoFi Sunset – 24/7"
        subtitle="music • lofi • chill"
        poster="/thumbnails/featured/poster.jpg"
        src="/thumbnails/featured/featured.mp4"
        href="/live/lofi-1"
        live
      />

      {/* Sections under hero */}
      <main className="px-4 pb-28">
        <MediaRow
          title="Trending Now"
          href="/trending"
          items={[
            { title: "LoFi #1", category: "music", tags: ["lofi"], img: "/thumbnails/music/lofi-1.jpg" },
            { title: "LoFi #2", category: "music", tags: ["lofi"], img: "/thumbnails/music/lofi-2.jpg" },
            { title: "Pixel Art #1", category: "art", tags: ["pixel"], img: "/thumbnails/art/pixel-1.jpg" },
            { title: "Gaming #1", category: "gaming", tags: ["fps"], img: "/thumbnails/gaming/game-1.jpg" },
          ]}
        />
        <MediaRow
          title="Recommended"
          href="/recommended"
          items={[
            { title: "LoFi #3", category: "music", tags: ["lofi"], img: "/thumbnails/music/lofi-3.jpg" },
            { title: "Pixel Art #2", category: "art", tags: ["pixel"], img: "/thumbnails/art/pixel-2.jpg" },
            { title: "Nature #1", category: "relax", tags: ["4k"], img: "/thumbnails/relax/nature-1.jpg" },
            { title: "Gaming #2", category: "gaming", tags: ["rpg"], img: "/thumbnails/gaming/game-2.jpg" },
          ]}
        />
      </main>
    </>
  );
}
