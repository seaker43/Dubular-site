import CardGrid from "../ui/CardGrid";
import StreamCard from "../ui/StreamCard";

const trending = [
  { title: "Night Raid Tactics #1", img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1200&q=75&auto=format", live: true },
  { title: "DJ Krillz Party",       img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=75&auto=format", live: true },
  { title: "Street Battle 9",       img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&q=75&auto=format", live: true },
  { title: "Dubular Presents",      img: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=1200&q=75&auto=format", live: false },
  { title: "Tech Live Coding",      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75&auto=format", live: true },
];

const recommended = [
  { title: "Synthwave Chill Mix",   img: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=1200&q=75&auto=format", live: false },
  { title: "House Party Set",       img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1200&q=75&auto=format", live: false },
  { title: "Retro Arcade Night",    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=75&auto=format", live: true },
  { title: "AI Coding Jam",         img: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1200&q=75&auto=format", live: true },
  { title: "Lo-Fi Study Session",   img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=75&auto=format", live: false },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8">
      {/* Trending */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl sm:text-4xl">Trending Now</h2>
          <a href="#" className="text-sm border border-white/30 px-3 py-1 rounded hover:bg-white hover:text-black transition">See all &gt;</a>
        </div>
        <CardGrid>{trending.map((v) => <StreamCard key={v.title} {...v} />)}</CardGrid>
      </section>

      {/* Recommended */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl">Recommended for You</h2>
          <a href="#" className="text-sm border border-white/30 px-3 py-1 rounded hover:bg-white hover:text-black transition">See all &gt;</a>
        </div>
        <CardGrid>{recommended.map((v) => <StreamCard key={v.title} {...v} />)}</CardGrid>
      </section>
    </main>
  );
}
