// pages/find.js
import Head from "next/head";
import Link from "next/link";
import { Search } from "lucide-react";

/** ---------- Mock data (replace with real results) ---------- */
const biggestGrinders = [
  { id: "bg1", title: "Daily Marathoner", img: "/thumbnails/grinders1.jpg", href: "/watch/bg1" },
  { id: "bg2", title: "No Days Off",     img: "/thumbnails/grinders2.jpg", href: "/watch/bg2" },
  { id: "bg3", title: "Grinding Clips",   img: "/thumbnails/grinders3.jpg", href: "/watch/bg3" },
  { id: "bg4", title: "Late Night Grind", img: "/thumbnails/grinders4.jpg", href: "/watch/bg4" },
  { id: "bg5", title: "Road to Partner",  img: "/thumbnails/grinders2.jpg", href: "/watch/bg5" },
];

const mostWatched = [
  { id: "mw1", title: "Top VOD #1",  img: "/thumbnails/watched1.jpg", href: "/watch/mw1" },
  { id: "mw2", title: "Top VOD #2",  img: "/thumbnails/watched2.jpg", href: "/watch/mw2" },
  { id: "mw3", title: "Top VOD #3",  img: "/thumbnails/watched3.jpg", href: "/watch/mw3" },
  { id: "mw4", title: "Top VOD #4",  img: "/thumbnails/watched4.jpg", href: "/watch/mw4" },
  { id: "mw5", title: "Top VOD #5",  img: "/thumbnails/watched2.jpg", href: "/watch/mw5" },
];

const mostLiked = [
  { id: "ml1", title: "Fan Favorite",    img: "/thumbnails/liked1.jpg", href: "/watch/ml1" },
  { id: "ml2", title: "Most Hearts",     img: "/thumbnails/liked2.jpg", href: "/watch/ml2" },
  { id: "ml3", title: "Clipped to Heaven", img: "/thumbnails/liked3.jpg", href: "/watch/ml3" },
  { id: "ml4", title: "Community Pick",  img: "/thumbnails/liked4.jpg", href: "/watch/ml4" },
  { id: "ml5", title: "S Tier",          img: "/thumbnails/liked2.jpg", href: "/watch/ml5" },
];

const trending = [
  { id: "tr1", title: "Speedrun Saturday", img: "/thumbnails/trending1.jpg", href: "/watch/tr1" },
  { id: "tr2", title: "New Meta Clips",    img: "/thumbnails/trending2.jpg", href: "/watch/tr2" },
  { id: "tr3", title: "Chill Streams",     img: "/thumbnails/trending3.jpg", href: "/watch/tr3" },
  { id: "tr4", title: "Tourney Recap",     img: "/thumbnails/trending4.jpg", href: "/watch/tr4" },
  { id: "tr5", title: "Highlights Pack",   img: "/thumbnails/trending2.jpg", href: "/watch/tr5" },
];

const recommended = [
  { id: "rc1", title: "Because you liked X", img: "/thumbnails/reco1.jpg", href: "/watch/rc1" },
  { id: "rc2", title: "Creators like Y",     img: "/thumbnails/reco2.jpg", href: "/watch/rc2" },
  { id: "rc3", title: "Handpicked",          img: "/thumbnails/reco3.jpg", href: "/watch/rc3" },
  { id: "rc4", title: "For your nights",     img: "/thumbnails/reco4.jpg", href: "/watch/rc4" },
  { id: "rc5", title: "Don’t miss these",    img: "/thumbnails/reco2.jpg", href: "/watch/rc5" },
];

/** ---------- Thumbnail card (uses your globals.css classes) ---------- */
function FindThumb({ item, glow = "glow-dual" }) {
  return (
    <Link href={item.href} className={`thumb-card ${glow}`} prefetch={false}>
      <img src={item.img} alt={item.title} className="thumb-img" />
      <div className="thumb-title">{item.title}</div>
    </Link>
  );
}

/** ---------- Row section ---------- */
function Row({ title, items }) {
  return (
    <section className="mt-4">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="thumb-row">
        {items.map((it) => (
          <FindThumb key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}

export default function Find() {
  return (
    <>
      <Head>
        <title>dubUlar — Find</title>
        <meta name="description" content="Search and discover on dubUlar" />
      </Head>

      <main>
        {/* Search bar snug under header */}
        <div className="search-wrap">
          <form className="search-bar" action="/find" method="get">
            <Search size={18} className="opacity-80" />
            <input
              type="text"
              name="q"
              placeholder="Search creators, streams, categories…"
              autoComplete="off"
              aria-label="Search"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        {/* Your chosen categories */}
        <Row title="Biggest Grinders" items={biggestGrinders} />
        <Row title="Most Watched" items={mostWatched} />
        <Row title="Most Liked" items={mostLiked} />
        <Row title="Trending" items={trending} />
        <Row title="Recommended" items={recommended} />
      </main>
    </>
  );
  }
