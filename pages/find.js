// pages/find.js
import Head from "next/head";
import FindThumb from "@/components/FindThumb";

const CATEGORIES = [
  {
    name: "Trending",
    items: [
      { id: "tr1", title: "LoFi #1", src: "/thumbnails/trending/1.jpg" },
      { id: "tr2", title: "LoFi #2", src: "/thumbnails/trending/2.jpg" },
      { id: "tr3", title: "LoFi #3", src: "/thumbnails/trending/3.jpg" },
      { id: "tr4", title: "LoFi #4", src: "/thumbnails/trending/4.jpg" },
      { id: "tr5", title: "LoFi #5", src: "/thumbnails/trending/5.jpg" },
    ],
  },
  {
    name: "Recommended",
    items: [
      { id: "re1", title: "Chill Beats", src: "/thumbnails/recommended/1.jpg" },
      { id: "re2", title: "Study Flow", src: "/thumbnails/recommended/2.jpg" },
      { id: "re3", title: "Night Drive", src: "/thumbnails/recommended/3.jpg" },
      { id: "re4", title: "Focus Core", src: "/thumbnails/recommended/4.jpg" },
      { id: "re5", title: "Ambient Set", src: "/thumbnails/recommended/5.jpg" },
    ],
  },
  {
    name: "Most Watched",
    items: [
      { id: "mw1", title: "Synthwave", src: "/thumbnails/most-watched/1.jpg" },
      { id: "mw2", title: "Vapor Dreams", src: "/thumbnails/most-watched/2.jpg" },
      { id: "mw3", title: "Retro Night", src: "/thumbnails/most-watched/3.jpg" },
      { id: "mw4", title: "Lounge FM", src: "/thumbnails/most-watched/4.jpg" },
      { id: "mw5", title: "Night Owl", src: "/thumbnails/most-watched/5.jpg" },
    ],
  },
  {
    name: "Most Liked",
    items: [
      { id: "ml1", title: "Deep Focus", src: "/thumbnails/most-liked/1.jpg" },
      { id: "ml2", title: "Lo-Key", src: "/thumbnails/most-liked/2.jpg" },
      { id: "ml3", title: "Calm Loop", src: "/thumbnails/most-liked/3.jpg" },
      { id: "ml4", title: "Soft Neon", src: "/thumbnails/most-liked/4.jpg" },
      { id: "ml5", title: "City Rain", src: "/thumbnails/most-liked/5.jpg" },
    ],
  },
  {
    name: "Biggest Grinders",
    items: [
      { id: "bg1", title: "24/7 Loops", src: "/thumbnails/grinders/1.jpg" },
      { id: "bg2", title: "No Breaks", src: "/thumbnails/grinders/2.jpg" },
      { id: "bg3", title: "Always On", src: "/thumbnails/grinders/3.jpg" },
      { id: "bg4", title: "Night Shift", src: "/thumbnails/grinders/4.jpg" },
      { id: "bg5", title: "Grinding", src: "/thumbnails/grinders/5.jpg" },
    ],
  },
];

export default function Find() {
  return (
    <>
      <Head>
        <title>Find • dubUlar</title>
      </Head>

      {/* Search bar area */}
      <div className="px-4 mb-6">
        <div className="w-full h-12 rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 backdrop-blur flex items-center px-4">
          <span className="text-neutral-400">Search titles…</span>
        </div>
      </div>

      {/* Category rows */}
      <div className="space-y-8 px-4">
        {CATEGORIES.map((cat) => (
          <section key={cat.name}>
            <h2 className="text-2xl font-bold mb-3">{cat.name}</h2>
            <ul className="thumb-row">
              {cat.items.map((it) => (
                <FindThumb key={it.id} item={it} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
