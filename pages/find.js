// pages/find.js
import Head from "next/head";
import Layout from "@components/Layout";
import { useState } from "react";

const TRENDING = [
  { id: 1, title: "Trending A", img: "/thumbnails/trending1.jpg" },
  { id: 2, title: "Trending B", img: "/thumbnails/trending2.jpg" },
  { id: 3, title: "Trending C", img: "/thumbnails/trending3.jpg" },
  { id: 4, title: "Trending D", img: "/thumbnails/trending4.jpg" },
  { id: 5, title: "Trending E", img: "/thumbnails/trending1.jpg" },
  { id: 6, title: "Trending F", img: "/thumbnails/trending2.jpg" },
];

const ART = [
  { id: 1, title: "Art A", img: "/thumbnails/trending2.jpg" },
  { id: 2, title: "Art B", img: "/thumbnails/trending3.jpg" },
  { id: 3, title: "Art C", img: "/thumbnails/trending4.jpg" },
  { id: 4, title: "Art D", img: "/thumbnails/trending1.jpg" },
  { id: 5, title: "Art E", img: "/thumbnails/trending2.jpg" },
];

const INDIE = [
  { id: 1, title: "Indie A", img: "/thumbnails/trending3.jpg" },
  { id: 2, title: "Indie B", img: "/thumbnails/trending4.jpg" },
  { id: 3, title: "Indie C", img: "/thumbnails/trending1.jpg" },
  { id: 4, title: "Indie D", img: "/thumbnails/trending2.jpg" },
  { id: 5, title: "Indie E", img: "/thumbnails/trending3.jpg" },
];

function Rail({ title, items, live = false }) {
  return (
    <section className="px-4 mt-6">
      <div className="section-header">
        <h2>{title}</h2>
      </div>

      {/* EXACT same rail + card classes as homepage */}
      <div className="thumb-row no-scrollbar" role="list" style={{ scrollBehavior: "auto" }}>
        {/* edge spacer (optional) */}
        <div className="shrink-0 w-1" aria-hidden="true" />
        {items.map((item) => (
          <article
            key={`${title}-${item.id}`}
            className={`thumb-card ${live ? "glow-red" : "glow-cyan"}`}
            role="listitem"
          >
            <img
              src={item.img}
              alt={item.title}
              className="thumb-img"
              loading="lazy"
              decoding="async"
              // No opacity transitions = no flicker on fast swipes
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
              draggable="false"
            />
            {live && <span className="live-badge">LIVE</span>}
            <div className="thumb-title">{item.title}</div>
          </article>
        ))}
        <div className="shrink-0 w-1" aria-hidden="true" />
      </div>
    </section>
  );
}

export default function Find() {
  const [q, setQ] = useState("");

  return (
    <Layout>
      <Head>
        <title>dubUlar • Find</title>
      </Head>

      {/* Search bar */}
      <section className="px-4 mt-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-800 rounded-xl px-3 py-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70">
            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23A6.5 6.5 0 1 0 9.5 16a6.471 6.471 0 0 0 4.23-1.57l.27.28v.79L20 21.5L21.5 20zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
          </svg>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search creators, streams, topics…"
            className="w-full bg-transparent outline-none placeholder:text-neutral-500"
          />
        </form>
      </section>

      {/* Rails */}
      <Rail title="Trending" items={TRENDING} />
      <Rail title="Art" items={ART} />
      <Rail title="Independent Media" items={INDIE} />
    </Layout>
  );
}
