import Link from "next/link";
import Row from "../components/ui/Row";
import StreamCard from "../components/ui/StreamCard";
import BottomNav from "../components/ui/BottomNav";

const demo = [
  { title: "Night Raid Tactics", thumb: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop", href: "/stream/night", live: true },
  { title: "Creative Build-Off", thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop", href: "/stream/build", live: true },
  { title: "Speedrun Arena", thumb: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1dc?q=80&w=1200&auto=format&fit=crop", href: "/stream/speed" },
  { title: "Co-op Gauntlet", thumb: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop", href: "/stream/coop" },
  { title: "Retro Night", thumb: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop", href: "/stream/retro" },
];

export const runtime = "experimental-edge";

export default function Home() {
  return (
    <div className="container">
      {/* Top bar like Netflix: logo left, search right */}
      <header className="topbar">
        <Link href="/" className="brand">dub<span className="brand-accent">U</span>lar</Link>
        <Link href="/streams" className="icon-btn" aria-label="Search">🔍</Link>
      </header>

      {/* Rows */}
      <Row title="Mobile Streams" seeAllHref="/streams">
        {demo.map((s, i) => <StreamCard key={i} {...s} />)}
      </Row>

      <Row title="Top 10 Today" seeAllHref="/leaderboards">
        {demo.slice().reverse().map((s, i) => <StreamCard key={i} {...s} />)}
      </Row>

      <Row title="Continue Watching">
        {demo.map((s, i) => <StreamCard key={i} {...s} />)}
      </Row>

      <div style={{height:"64px"}} /> {/* spacer for nav */}
      <BottomNav />
    </div>
  );
}
