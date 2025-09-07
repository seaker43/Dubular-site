import Head from "next/head";
import BottomBar from "@/components/BottomBar";
import MediaCard from "@/components/MediaCard";
import MediaRow from "@/components/MediaRow";
import Section from "@/components/Section";

export default function Home() {
  const trending = [
    { href:"/streams/lofi-1", title:"LoFi #1", img:"/images/cover1.jpg", tags:["music","lofi"], live:true },
    { href:"/streams/lofi-2", title:"LoFi #2", img:"/images/cover2.jpg", tags:["music","lofi"] },
  ];

  const mostLiked = [
    { href:"/art/pixel-1", title:"Pixel Art #1", img:"/images/pixel1.jpg", tags:["art","pixel"] },
    { href:"/art/pixel-2", title:"Pixel Art #2", img:"/images/pixel2.jpg", tags:["art","pixel"] },
  ];

  const grinders = [
    { href:"/streamer/one", title:"Streamer #1", img:"/images/stream1.jpg", tags:["hours:100"], live:true },
    { href:"/streamer/two", title:"Streamer #2", img:"/images/stream2.jpg", tags:["hours:105"] },
  ];

  return (
    <>
      <Head>
        <title>Dubular</title>
        <meta name="theme-color" content="#0b1012" />
      </Head>

      <main className="pb-28 pt-6">
        <div className="safe-px">
          <h1 className="neon-text text-3xl font-extrabold">Dubular</h1>
        </div>

        {/* Trending (row) */}
        <MediaRow title="Trending Now" items={trending} />

        {/* Most Liked (grid) */}
        <Section title="Most Liked">
          {mostLiked.map((it,i)=> <MediaCard key={i} {...it} />)}
        </Section>

        {/* Biggest Grinders (grid) */}
        <Section title="Biggest Grinders">
          {grinders.map((it,i)=> <MediaCard key={i} {...it} />)}
        </Section>
      </main>

      <BottomBar />
    </>
  );
}
