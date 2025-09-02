import Head from "next/head";
import CategoryRow from "../components/home/CategoryRow";
import StreamCard from "../components/home/StreamCard";

const rows = [
  {
    title: "Trending Now",
    href: "/streams?sort=trending",
    items: [
      { title: "Speedrun Showdown: Any% Madness", thumb: "/thumbs/sample1.jpg", live: true, href: "/stream/channel-1" },
      { title: "Co-op Chaos: Duo Challenges", thumb: "/thumbs/sample2.jpg", href: "/stream/channel-2" },
      { title: "Tactics Tuesday | Ranked grind", thumb: "/thumbs/sample3.jpg", href: "/stream/channel-3" },
      { title: "Community Challenge Night", thumb: "/thumbs/sample4.jpg", live: true, href: "/stream/channel-4" },
    ],
  },
  {
    title: "Recommended For You",
    href: "/streams?sort=recommended",
    items: [
      { title: "No-Hit Boss Rush", thumb: "/thumbs/sample5.jpg", href: "/stream/channel-5" },
      { title: "Aim Labs to Ranked", thumb: "/thumbs/sample6.jpg", live: true, href: "/stream/channel-6" },
      { title: "Variety Night — Chat Picks", thumb: "/thumbs/sample7.jpg", href: "/stream/channel-7" },
      { title: "Retro Speedruns Marathon", thumb: "/thumbs/sample8.jpg", href: "/stream/channel-8" },
    ],
  },
  {
    title: "New & Noteworthy",
    href: "/streams?sort=new",
    items: [
      { title: "Day 1: Challenge Ladder", thumb: "/thumbs/sample9.jpg", href: "/stream/channel-9" },
      { title: "Streamer vs Streamer | Best of 5", thumb: "/thumbs/sample10.jpg", href: "/stream/channel-10" },
      { title: "Chat-Voted Objectives", thumb: "/thumbs/sample11.jpg", live: true, href: "/stream/channel-11" },
      { title: "Speed Golf — All Levels", thumb: "/thumbs/sample12.jpg", href: "/stream/channel-12" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular</title>
        <meta name="description" content="Compete, challenge, and stream — together." />
      </Head>

      <div className="pt-2">
        {rows.map((row) => (
          <CategoryRow key={row.title} title={row.title} href={row.href}>
            {row.items.map((it) => (
              <StreamCard key={it.title} {...it} />
            ))}
          </CategoryRow>
        ))}
      </div>
    </>
  );
}

// --- runtime/dynamic guards for Cloudflare Pages ---
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
