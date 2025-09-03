import Row from "../components/Row";

const demo = (n, prefix) =>
  Array.from({ length: n }).map((_, i) => ({
    id: `${prefix}-${i+1}`,
    title: [
      "AI Coding Jam",
      "Lo-Fi Study Session",
      "Night Raid Tactics #"+(i+1),
      "Street Battle "+(i+3),
      "Synthwave Night",
      "Travel IRL",
      "Studio Session"
    ][i % 7],
    live: i % 2 === 0,
    thumb: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1526312426976-593c2be8ce5e?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
    ][i % 7] + "&auto=format&fit=crop&q=60"
  }));

export default function Home() {
  return (
    <div className="home">
      <Row title="Trending Now"    link="#" items={demo(12, "trending")} />
      <Row title="Recommended"     link="#" items={demo(12, "recommended")} />
      <Row title="Live Channels"   link="#" items={demo(12, "live")} />
      <Row title="Popular Now"     link="#" items={demo(12, "popular")} />
    </div>
  );
}
