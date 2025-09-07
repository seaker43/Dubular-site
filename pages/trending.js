// pages/trending.js
import Head from "next/head";
import ThumbnailCard from "../components/ThumbnailCard";

const items = [
  { title: "LoFi #1", category: "music", tag: "lofi", live: true, imgSrc: "/thumbs/music/lofi-1.jpg", href: "/streams/lofi-1" },
  { title: "LoFi #2", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-2.jpg", href: "/streams/lofi-2" },
  { title: "LoFi #3", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-3.jpg", href: "/streams/lofi-3" },
  { title: "LoFi #4", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-4.jpg", href: "/streams/lofi-4" },
  { title: "LoFi #5", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-5.jpg", href: "/streams/lofi-5" },
  { title: "LoFi #6", category: "music", tag: "lofi", imgSrc: "/thumbs/music/lofi-6.jpg", href: "/streams/lofi-6" },
];

export default function Trending() {
  return (
    <>
      <Head><title>Trending • Dubular</title></Head>
      <main className="px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neon drop-shadow-glow mb-6">Trending Now</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <ThumbnailCard key={i} {...it} />
          ))}
        </div>
      </main>
    </>
  );
}
