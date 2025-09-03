import Image from "next/image";

export default function Home() {
  const trending = [
    { title: "Night Raid Tactics #1", img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1200&q=75&auto=format" },
    { title: "DJ Krillz Party",       img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=75&auto=format" },
    { title: "Street Battle 9",       img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&q=75&auto=format" },
    { title: "Dubular Presents",      img: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=1200&q=75&auto=format" },
    { title: "Tech Live Coding",      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75&auto=format" },
  ];

  return (
    <main className="bg-black min-h-screen text-white px-4 py-6">
      {/* Header (also appears from _app.js, keep this if you want a page-local title) */}
      <header className="text-4xl font-bold mb-6">dubUlar</header>

      {/* Trending Row */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Trending Now</h2>
          <a
            href="#"
            className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
          >
            See all &gt;
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {trending.map((v, i) => (
            <article
              key={v.title}
              className="bg-zinc-900 rounded overflow-hidden shadow-lg relative"
            >
              <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">
                LIVE
              </span>

              <div className="relative aspect-[16/9]">
                <Image
                  src={v.img}
                  alt={v.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  priority={i < 2}
                />
              </div>

              <div className="p-2">
                <h3 className="text-cyan-400 font-medium text-sm line-clamp-2">
                  {v.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Add more rows (e.g., Recommended, Live Channels, etc.) here */}
    </main>
  );
}
