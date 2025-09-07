// pages/search.js
import Head from "next/head";
import MediaRow from "../components/MediaRow";

const makeItems = (base, cat, tag, n = 8) =>
  Array.from({ length: n }).map((_, i) => ({
    title: `${base} #${i + 1}`,
    category: cat,
    tags: [tag],
    // put your real thumbs in /public/thumbs/*.jpg|png
    thumb: `/thumbs/${cat.toLowerCase()}-${(i % 6) + 1}.jpg`,
    live: i === 0 && (cat === "Music" || cat === "IRL"),
  }));

export default function SearchPage() {
  const rows = [
    { title: "Music", href: "/music", items: makeItems("LoFi", "Music", "lofi") },
    { title: "Art", href: "/art", items: makeItems("Pixel Art", "Art", "pixel") },
    { title: "Gaming", href: "/gaming", items: makeItems("Gameplay", "Gaming", "fps") },
    { title: "Podcasts", href: "/podcasts", items: makeItems("Talk", "Podcasts", "chat") },
    { title: "IRL", href: "/irl", items: makeItems("Live IRL", "IRL", "live") },
    { title: "Coding", href: "/coding", items: makeItems("Dev Stream", "Coding", "js") },
    { title: "Sports", href: "/sports", items: makeItems("Match", "Sports", "highlights") },
    { title: "News", href: "/news", items: makeItems("Update", "News", "daily") },
  ];

  return (
    <>
      <Head><title>Find • Dubular</title></Head>
      <main className="px-4 pb-24 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-neon tracking-tight mb-6">Find</h1>

        {/* (optional) quick search UI stub — wire up later */}
        <div className="mb-6">
          <div className="relative">
            <input
              aria-label="Search"
              placeholder="Search creators, streams, tags…"
              className="w-full rounded-xl bg-neutral-900/70 border border-neutral-800 px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[var(--neon)]"
            />
          </div>
        </div>

        {rows.map((row) => (
          <MediaRow
            key={row.title}
            title={row.title}
            href={row.href}
            items={row.items}
            cols={{ base: 2, md: 3, lg: 4 }}   // more cards per row on larger screens
            loop                                    // infinite loop carousel
          />
        ))}
      </main>
    </>
  );
}
