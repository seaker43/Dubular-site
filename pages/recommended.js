// pages/recommended.js
import Head from "next/head";
import Thumb from "../components/Thumb";

const items = [
  {
    title: "LoFi #2",
    category: "music",
    tag: "lofi",
    imgSrc: "/thumbs/music/lofi-2.jpg",
    href: "/streams/lofi-2",
  },
  {
    title: "Pixel Art #1",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-1.jpg",
    href: "/art/1",
  },
  {
    title: "LoFi #4",
    category: "music",
    tag: "lofi",
    imgSrc: "/thumbs/music/lofi-4.jpg",
    href: "/streams/lofi-4",
  },
  {
    title: "LoFi #5",
    category: "music",
    tag: "lofi",
    imgSrc: "/thumbs/music/lofi-5.jpg",
    href: "/streams/lofi-5",
  },
  {
    title: "Pixel Art #2",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-2.jpg",
    href: "/art/2",
  },
  {
    title: "LoFi #6",
    category: "music",
    tag: "lofi",
    imgSrc: "/thumbs/music/lofi-6.jpg",
    href: "/streams/lofi-6",
  },
];

export default function Recommended() {
  return (
    <>
      <Head>
        <title>Recommended • Dubular</title>
      </Head>
      <main className="px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neon drop-shadow-glow mb-6">
          Recommended
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Thumb key={i} {...it} />
          ))}
        </div>
      </main>
    </>
  );
}
