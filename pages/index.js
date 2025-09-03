import Row from "../ui/Row";
import BottomBar from "../ui/BottomBar";

const featured = [
  { title: "Pro Caster — Night Ops", img: "https://images.unsplash.com/photo-1581276879432-15e50521f95e" },
  { title: "Studio Session", img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" },
];
const watched = [
  { title: "Retro Arcade Vibes", img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { title: "Lo-Fi Study Session", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
];
const trending = [
  { title: "Night Raid Tactics #1", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", live:true },
  { title: "Street Battle 9", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d", live:true },
  { title: "DJ Krillz Party", img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2", live:true },
  { title: "Dubular Presents", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" },
  { title: "Tech Live Coding", img: "https://images.unsplash.com/photo-1518770660439-4636190af475", live:true },
];
const recommended = [
  { title: "AI Coding Jam", img: "https://images.unsplash.com/photo-1581093588401-22a3d7848d3f" },
  { title: "Lo-Fi Study Session", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
];
const music = [
  { title: "Dubular Presents", img: "https://images.unsplash.com/photo-1485579149621-3123dd979885" },
  { title: "Live DJ Set", img: "https://images.unsplash.com/photo-1487180144351-b8472da7d491" },
];
const irl = [
  { title: "Travel IRL", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
];
const gaming = [
  { title: "Battle Royale Grind", img: "https://images.unsplash.com/photo-1511512578047-9f6c0c9be2a2", live:true },
  { title: "Retro Randomizer", img: "https://images.unsplash.com/photo-1580128636036-3d6b7a3e3d58" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pb-20">
      <Row title="Featured Streamers" items={featured} seeAllHref="/featured" />
      <Row title="Previously Watched" items={watched} seeAllHref="/history" />
      <Row title="Trending" items={trending} seeAllHref="/trending" trending />
      <Row title="Recommended" items={recommended} seeAllHref="/recommended" />
      <Row title="Music" items={music} seeAllHref="/music" />
      <Row title="IRL" items={irl} seeAllHref="/irl" />
      <Row title="Gaming" items={gaming} seeAllHref="/gaming" />
      <BottomBar />
    </main>
  );
}
