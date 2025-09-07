// pages/search.js
import Head from "next/head";
import MediaRow from "../components/MediaRow";

export default function Search() {
  return (
    <>
      <Head>
        <title>Find • Dubular</title>
      </Head>

      <main className="px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neon mb-6">
          Find
        </h1>

        {/* search input (UI only for now) */}
        <div className="mb-10">
          <input
            type="search"
            placeholder="Search creators, streams, tags..."
            className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800/70 px-4 py-4 text-base outline-none focus:ring-2 focus:ring-neon/60 placeholder:text-zinc-500"
          />
        </div>

        <MediaRow
          title="Music"
          href="/search?cat=music"
          items={[
            { title: "LoFi #1", category: "music", image: "/thumbnails/trending/trending1.jpg", live: true },
            { title: "LoFi #2", category: "music", image: "/thumbnails/trending/trending2.jpg" },
            { title: "LoFi #3", category: "music", image: "/thumbnails/trending/trending3.jpg" },
            { title: "LoFi #4", category: "music", image: "/thumbnails/trending/trending4.jpg" },
            { title: "LoFi #5", category: "music", image: "/thumbnails/trending/trending5.jpg" },
          ]}
        />

        <MediaRow
          title="Art"
          href="/search?cat=art"
          items={[
            { title: "Pixel Art #1", category: "art", image: "/thumbnails/art/art1.jpg" },
            { title: "Pixel Art #2", category: "art", image: "/thumbnails/art/art2.jpg" },
            { title: "Pixel Art #3", category: "art", image: "/thumbnails/art/art3.jpg" },
          ]}
        />

        <MediaRow
          title="Gaming"
          href="/search?cat=gaming"
          items={[
            { title: "Stream #1", category: "gaming", image: "/thumbnails/trending/trending3.jpg" },
            { title: "Stream #2", category: "gaming", image: "/thumbnails/trending/trending4.jpg" },
            { title: "Stream #3", category: "gaming", image: "/thumbnails/trending/trending5.jpg" },
          ]}
        />

        <MediaRow
          title="Podcasts"
          href="/search?cat=podcasts"
          items={[
            { title: "Talk #1", category: "podcasts", image: "/thumbnails/trending/trending2.jpg" },
            { title: "Talk #2", category: "podcasts", image: "/thumbnails/trending/trending5.jpg" },
          ]}
        />

        <MediaRow
          title="Independent Media"
          href="/search?cat=independent"
          items={[
            { title: "Indie #1", category: "independent", image: "/thumbnails/art/art2.jpg" },
            { title: "Indie #2", category: "independent", image: "/thumbnails/art/art3.jpg" },
            { title: "Indie #3", category: "independent", image: "/thumbnails/trending/trending1.jpg" },
          ]}
        />
      </main>
    </>
  );
}
