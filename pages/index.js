import Row from "../ui/Row";

const featured = [
  { title: "Studio Session", img: "https://images.unsplash.com/photo-1484436023628-89cedb81be0e?q=80&w=1200&auto=format&fit=crop" },
  { title: "Coder Cam 24/7", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" },
  { title: "Retro Vibes", img: "https://images.unsplash.com/photo-1556012018-50b6b7d2f3c1?q=80&w=1200&auto=format&fit=crop" },
  { title: "Chat & Chill", img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1200&auto=format&fit=crop" },
];

const trending = [
  { title: "Night Raid Tactics #1", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", live: true },
  { title: "Street Battles", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop", live: true },
  { title: "DJ Krillz Party", img: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop", live: true },
  { title: "Lo-Fi Study", img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop" },
];

const recommended = [
  { title: "AI Coding Jam", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop", live: true },
  { title: "Lo-Fi Study Session", img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop" },
  { title: "Synthwave Night", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop" },
  { title: "Travel IRL", img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop" },
];

const music = [
  { title: "Dubular Presents", img: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1200&auto=format&fit=crop" },
  { title: "Live DJ Set", img: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop", live: true },
  { title: "Synth Lab", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop" },
  { title: "Vocal Booth", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop" },
];

const irl = [
  { title: "Street Food Walk", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" },
  { title: "City Nights", img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop" },
  { title: "Cafe Coding", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" },
  { title: "Morning Run", img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop" },
];

const gaming = [
  { title: "Battle Royale Grind", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop", live: true },
  { title: "Speedrun Night", img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop" },
  { title: "Retro Randomizer", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop" },
  { title: "Tactics Arena", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" },
];

export default function Home(){
  return (
    <main className="min-h-screen px-4 py-6">
      <Row title="Featured Streamers" items={featured} seeAllHref="/featured" />
      <Row title="Trending" items={trending} flame seeAllHref="/trending" />
      <Row title="Recommended" items={recommended} seeAllHref="/recommended" />
      <Row title="Music" items={music} seeAllHref="/music" />
      <Row title="IRL" items={irl} seeAllHref="/irl" />
      <Row title="Gaming" items={gaming} seeAllHref="/gaming" />
    </main>
  );
}
