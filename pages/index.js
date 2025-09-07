// pages/index.js
import Head from "next/head";
import Layout from "../components/Layout";
import MediaRow from "../components/MediaRow";

const trending = [
  { title: "LoFi #1", src: "/thumbnails/lofi1.jpg", tags: ["music", "lofi"], live: true },
  { title: "LoFi #2", src: "/thumbnails/lofi2.jpg", tags: ["music", "lofi"] },
  { title: "LoFi #3", src: "/thumbnails/lofi3.jpg", tags: ["music", "lofi"] },
  { title: "Pixel Art #1", src: "/thumbnails/pixel1.jpg", tags: ["art", "pixel"] },
  { title: "Pixel Art #2", src: "/thumbnails/pixel2.jpg", tags: ["art", "pixel"] },
  { title: "Pixel Art #3", src: "/thumbnails/pixel3.jpg", tags: ["art", "pixel"] },
];

const mostLiked = [
  { title: "Pixel Art #1", src: "/thumbnails/pixel1.jpg", tags: ["art", "pixel"] },
  { title: "Pixel Art #2", src: "/thumbnails/pixel2.jpg", tags: ["art", "pixel"] },
  { title: "Pixel Art #3", src: "/thumbnails/pixel3.jpg", tags: ["art", "pixel"] },
  { title: "LoFi #1", src: "/thumbnails/lofi1.jpg", tags: ["music", "lofi"] },
  { title: "LoFi #2", src: "/thumbnails/lofi2.jpg", tags: ["music", "lofi"] },
  { title: "LoFi #3", src: "/thumbnails/lofi3.jpg", tags: ["music", "lofi"] },
];

const recommended = [
  { title: "LoFi #2", src: "/thumbnails/lofi2.jpg", tags: ["music", "lofi"] },
  { title: "Pixel Art #1", src: "/thumbnails/pixel1.jpg", tags: ["art", "pixel"] },
  { title: "LoFi #3", src: "/thumbnails/lofi3.jpg", tags: ["music", "lofi"] },
  { title: "Pixel Art #2", src: "/thumbnails/pixel2.jpg", tags: ["art", "pixel"] },
  { title: "LoFi #1", src: "/thumbnails/lofi1.jpg", tags: ["music", "lofi"], live: true },
  { title: "Pixel Art #3", src: "/thumbnails/pixel3.jpg", tags: ["art", "pixel"] },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dubular</title>
      </Head>

      <main className="space-y-10 pb-28">
        <h1 className="site-title px-4 sm:px-6">Dubular</h1>

        <MediaRow title="Trending Now" items={trending} href="/trending" />
        <MediaRow title="Most Liked" items={mostLiked} href="/leaderboards" />
        <MediaRow title="Recommended" items={recommended} href="/recommended" />
      </main>
    </Layout>
  );
}
