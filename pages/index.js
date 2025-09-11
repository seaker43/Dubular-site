import React from "react";
// pages/index.js
import Head from "next/head";
import Link from "next/link";

/** ------- Mock data (swap later) ------- */
const liveNow = [
  {
    id: "lv1",
    title: "Arena Finals",
    img: "/thumbnails/live1.jpg",
    href: "/watch/lv1",
  },
  {
    id: "lv2",
    title: "Night Vibes",
    img: "/thumbnails/live2.jpg",
    href: "/watch/lv2",
  },
  {
    id: "lv3",
    title: "IRL Walk",
    img: "/thumbnails/live3.jpg",
    href: "/watch/lv3",
  },
  {
    id: "lv4",
    title: "Music Set",
    img: "/thumbnails/live4.jpg",
    href: "/watch/lv4",
  },
];

/** small card using globals.css classes */
function Thumb({ item, glow = "glow-dual", live = false }) {
  return (
    <Link href={item.href} className={`thumb-card ${glow}`} prefetch={false}>
      <img src={item.img} alt={item.title} className="thumb-img" />
      {live && <div className="live-badge">LIVE</div>}
      <div className="thumb-title">{item.title}</div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>dubUlar — Home</title>
        <meta
          name="description"
          content="Watch live streams and discover creators"
        />
      </Head>

      <main>
        {/* Featured hero snug under header */}
        <section className="featured-hero featured-glow-pink full-bleed">
          <img src="/thumbnails/featured.jpg" alt="Featured" />
          <div className="overlay" />
        </section>

        {/* Live row */}
        <section className="mt-4">
          <div className="section-header">
            <h2>Live</h2>
          </div>
          <div className="thumb-row">
            {liveNow.map((it) => (
              <Thumb key={it.id} item={it} glow="glow-red" live />
            ))}
          </div>
        </section>

        {/* Three vertical portrait thumbnails */}
        <section className="mt-4">
          <div className="section-header">
            <h2>Top 5</h2>
          </div>
          <div className="vthumb-grid">
            <Link
              href="/find?section=top-streamers"
              className="vthumb-card glow-dual"
              prefetch={false}
            >
              <img
                src="/thumbnails/top_streamers.jpg"
                alt="Top 5 Streamers"
                className="vthumb-img"
              />
              <div className="vthumb-gradient" />
              <div className="vthumb-title">Top 5 Streamers</div>
            </Link>
            <Link
              href="/find?section=top-gifters"
              className="vthumb-card glow-dual"
              prefetch={false}
            >
              <img
                src="/thumbnails/top_gifters.jpg"
                alt="Top 5 Gifters"
                className="vthumb-img"
              />
              <div className="vthumb-gradient" />
              <div className="vthumb-title">Top 5 Gifters</div>
            </Link>
            <Link
              href="/find?section=top-communities"
              className="vthumb-card glow-dual"
              prefetch={false}
            >
              <img
                src="/thumbnails/top_communities.jpg"
                alt="Top 5 Communities"
                className="vthumb-img"
              />
              <div className="vthumb-gradient" />
              <div className="vthumb-title">Top 5 Communities</div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
