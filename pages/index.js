import Row from "../ui/Row";

const featured = [
  { title: "Studio Session", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=75&auto=format", live: false },
  { title: "Coder Cam 24/7", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75&auto=format", live: true },
  { title: "Pro Caster — Night Ops", img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1200&q=75&auto=format", live: true },
];

const trending = [
  { title: "Night Raid Tactics #1", img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1200&q=75&auto=format", live: true },
  { title: "Street Battle 9",       img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&q=75&auto=format", live: true },
  { title: "Tech Live Coding",      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75&auto=format", live: true },
];

const recommended = [
  { title: "AI Coding Jam",         img: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1200&q=75&auto=format", live: true },
  { title: "Lo-Fi Study Session",   img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=75&auto=format", live: false },
  { title: "Retro Arcade Night",    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=75&auto=format", live: true },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8">
      <Row title="Featured Streamers" items={featured} seeAllHref="/featured" />
      <Row title="Trending" items={trending} seeAllHref="/trending" trending />
      <Row title="Recommended" items={recommended} seeAllHref="/recommended" />
    </main>
  );
}
