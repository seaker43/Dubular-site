// pages/search.js
import Head from "next/head";
import MediaRow from "../components/MediaRow";

export default function Search() {
  return (
    <>
      <Head>
        <title>Find | Dubular</title>
      </Head>

      <main className="px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-neon">
          Find
        </h1>

        {/* Search input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search creators, streams, tags..."
            className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon placeholder-gray-500"
          />
        </div>

        {/* Music */}
        <MediaRow
          title="Music"
          href="/find/music"
          items={[
            { title: "LoFi #1", category: "music • lofi", image: "/thumbs/music/lofi-1.jpg", live: true },
            { title: "LoFi #2", category: "music • lofi", image: "/thumbs/music/lofi-2.jpg" },
            { title: "LoFi #3", category: "music • lofi", image: "/thumbs/music/lofi-3.jpg" },
            { title: "LoFi #4", category: "music • lofi", image: "/thumbs/music/lofi-4.jpg" },
          ]}
        />

        {/* Art */}
        <MediaRow
          title="Art"
          href="/find/art"
          items={[
            { title: "Pixel Art #1", category: "art • pixel", image: "/thumbs/art/pixel-1.jpg" },
            { title: "Pixel Art #2", category: "art • pixel", image: "/thumbs/art/pixel-2.jpg" },
            { title: "Pixel Art #3", category: "art • pixel", image: "/thumbs/art/pixel-3.jpg" },
          ]}
        />

        {/* Gaming */}
        <MediaRow
          title="Gaming"
          href="/find/gaming"
          items={[
            { title: "FPS Stream #1", category: "gaming • fps", image: "/thumbs/gaming/fps-1.jpg" },
            { title: "RPG Stream #1", category: "gaming • rpg", image: "/thumbs/gaming/rpg-1.jpg" },
            { title: "MOBA Stream #1", category: "gaming • moba", image: "/thumbs/gaming/moba-1.jpg" },
          ]}
        />

        {/* Independent Media */}
        <MediaRow
          title="Independent Media"
          href="/find/independent"
          items={[
            { title: "Indie News #1", category: "media • news", image: "/thumbs/independent/indie-1.jpg" },
            { title: "Indie Doc #1", category: "media • doc", image: "/thumbs/independent/indie-2.jpg" },
            { title: "Indie Talk #1", category: "media • talk", image: "/thumbs/independent/indie-3.jpg" },
          ]}
        />
      </main>
    </>
  );
}
