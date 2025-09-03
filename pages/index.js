import Row from "../ui/Row";

const featured = [
  { title: "Pro Caster — Night Ops", img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1200&q=75&auto=format", live: true,  edgeColor: "#22d3ee" },
  { title: "Studio Session Live",    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=75&auto=format", live: false, edgeColor: "#a78bfa" },
  { title: "Coder Cam — 24/7",       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75&auto=format", live: true,  edgeColor: "#f472b6" },
];

const watched = [
  { title: "Retro Arcade Vibes",     img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=75&auto=format", live: false, edgeColor: "#34d399" },
  { title: "Lo-Fi Study Loop",       img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=75&auto=format", live: false, edgeColor: "#22d3ee" },
  { title: "Synthwave Nights",       img: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=1200&q=75&auto=format", live: true,  edgeColor: "#fb7185" },
];

const trending = [
  { title: "Night Raid Tactics #1",  img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1200&q=75&auto=format", live: true,  edgeColor: "#fb923c" },
  { title: "DJ Krillz Party",        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=75&auto=format", live: true,  edgeColor: "#f59e0b" },
  { title: "Street Battle 9",        img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&q=75&auto=format", live: true,  edgeColor: "#ef4444" },
  { title: "Dubular Presents",       img: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=1200&q=75&auto=format", live: false, edgeColor: "#f97316" },
  { title: "Tech Live Coding",       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75&auto=format", live: true,  edgeColor: "#f59e0b" },
];

const recommended = [
  { title: "AI Coding Jam",          img: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1200&q=75&auto=format", live: true,  edgeColor: "#22d3ee" },
  { title: "House Party Set",        img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1200&q=75&auto=format", live: false, edgeColor: "#a78bfa" },
  { title: "Lo-Fi Study Session",    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=75&auto=format", live: false, edgeColor: "#34d399" },
  { title: "Retro Arcade Night",     img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=75&auto=format", live: true,  edgeColor: "#fb7185" },
  { title: "Synthwave Chill Mix",    img: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=1200&q=75&auto=format", live: false, edgeColor: "#22d3ee" },
];

const music = [
  { title: "Deep House Live",        img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=75&auto=format", live: true,  edgeColor: "#60a5fa" },
  { title: "Lo-Fi Beats",            img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=75&auto=format", live: false, edgeColor: "#22d3ee" },
  { title: "Piano Chill",            img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=75&auto=format", live: false, edgeColor: "#a78bfa" },
];

const irl = [
  { title: "City Walk Live",         img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=75&auto=format", live: true,  edgeColor: "#34d399" },
  { title: "Travel IRL — Tokyo",     img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=75&auto=format", live: false, edgeColor: "#22d3ee" },
  { title: "Coffee Talks",           img: "https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?w=1200&q=75&auto=format", live: false, edgeColor: "#a78bfa" },
];

const gaming = [
  { title: "Battle Royale Grind",    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=75&auto=format", live: true,  edgeColor: "#22d3ee" },
  { title: "Speedrun Night",         img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&q=75&auto=format", live: false, edgeColor: "#f472b6" },
  { title: "Retro Randomizer",       img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=75&auto=format", live: false, edgeColor: "#34d399" },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8">
      <Row title="Featured Streamers" items={featured} seeAllHref="/featured" />
      <Row title="Previously Watched" items={watched} seeAllHref="/history" />
      <Row title="Trending" items={trending} seeAllHref="/trending" trending />
      <Row title="Recommended" items={recommended} seeAllHref="/recommended" />
      <Row title="Music" items={music} seeAllHref="/music" />
      <Row title="IRL" items={irl} seeAllHref="/irl" />
      <Row title="Gaming" items={gaming} seeAllHref="/gaming" />
    </main>
  );
}
