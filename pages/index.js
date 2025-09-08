// pages/index.js
import Head from "next/head";
import Layout from "@components/Layout";
import { useEffect, useState } from "react";

/* ===== FeaturedHeroTabs (inline for simplicity) ===== */
const HERO_TABS = [
  { key: "gaming",   label: "Gaming",   src: "/thumbnails/trending1.jpg" },
  { key: "irl",      label: "IRL",      src: "/thumbnails/trending2.jpg" },
  { key: "music",    label: "Music",    src: "/thumbnails/trending3.jpg" },
  { key: "podcast",  label: "Podcast",  src: "/thumbnails/trending4.jpg" },
];

function FeaturedHeroTabs() {
  const [active, setActive] = useState(0);
  const [glowPink, setGlowPink] = useState(true);

  // auto-rotate + alternate glow
  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_TABS.length);
      setGlowPink((g) => !g);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const tab = HERO_TABS[active];

  return (
    <section className="full-bleed hero-tight">
      <div className={`featured-hero ${glowPink ? "featured-glow-pink" : "featured-glow-blue"}`}>
        <img
          src={tab.src}
          alt={tab.label}
          className="w-full h-full object-cover will-change-transform"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />

        {/* transparent black category pills */}
        <div className="absolute bottom-4 left-4 flex gap-3">
          {HERO_TABS.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full bg-black/60 text-white border backdrop-blur-sm transition
                         ${i === active ? "border-white/60" : "border-white/20 hover:border-white/40"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Simple Live row ===== */
const LIVE_ITEMS = [
  { id: 1, title: "Live Music",    img: "/thumbnails/trending1.jpg", live: true },
  { id: 2, title: "Live Show",     img: "/thumbnails/trending2.jpg", live: true },
  { id: 3, title: "Speedrun",      img: "/thumbnails/trending3.jpg", live: true },
  { id: 4, title: "Talk Radio",    img: "/thumbnails/trending4.jpg", live: true },
];

function LiveRow() {
  return (
    <section className="px-4 mt-6">
      <div className="section-header">
        <h2>Live</h2>
      </div>

      <div className="thumb-row" role="list">
        {LIVE_ITEMS.map((item) => (
          <article
            key={item.id}
            className={`thumb-card ${item.live ? "glow-red" : "glow-cyan"}`}
            role="listitem"
          >
            <img src={item.img} alt={item.title} className="thumb-img" />
            {item.live && <span className="live-badge">LIVE</span>}
            <div className="thumb-title">{item.title}</div>
          </article>
        ))}
        {/* clones to smooth the end of the row */}
        {LIVE_ITEMS.slice(0, 2).map((item, i) => (
          <article key={`clone-${i}`} className="thumb-card glow-red">
            <img src={item.img} alt={`${item.title} clone`} className="thumb-img" />
            <span className="live-badge">LIVE</span>
            <div className="thumb-title">{item.title}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ===== NEW: Vertical Top 5 cards (3 portrait thumbs) ===== */
function TopFiveVertical() {
  const cards = [
    {
      key: "top-streamers",
      title: "Top 5 Streamers",
      img: "/thumbnails/portrait1.jpg", // replace with your portrait images
      href: "/top/streamers",
    },
    {
      key: "top-gifters",
      title: "Top 5 Gifters",
      img: "/thumbnails/portrait2.jpg",
      href: "/top/gifters",
    },
    {
      key: "top-communities",
      title: "Top 5 Communities",
      img: "/thumbnails/portrait3.jpg",
      href: "/top/communities",
    },
  ];

  return (
    <section className="px-4 mt-8">
      <div className="section-header">
        <h2>Top 5</h2>
      </div>

      <div className="vthumb-grid">
        {cards.map((c) => (
          <a key={c.key} href={c.href} className="vthumb-card glow-dual" aria-label={c.title}>
            <img src={c.img} alt={c.title} className="vthumb-img" />
            <div className="vthumb-gradient" />
            <div className="vthumb-title">{c.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>dubUlar • Home</title>
      </Head>

      {/* Full-bleed featured block */}
      <FeaturedHeroTabs />

      {/* Live horizontal row */}
      <LiveRow />

      {/* NEW: Three vertical thumbnails under Live */}
      <TopFiveVertical />
    </Layout>
  );
}
