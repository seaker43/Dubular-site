import Link from "next/link";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import CardGrid from "../components/CardGrid";

const TOP_STREAMS = [
  { href: "/stream/dubular", title: "Dubular", desc: "Live now • HLS", image: "https://images.pexels.com/photos/394568/pexels-photo-394568.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { href: "/stream/starplayer", title: "Star Player", desc: "Competitive FPS", image: "https://images.pexels.com/photos/907221/pexels-photo-907221.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { href: "/stream/speedrunner", title: "Speed Runner", desc: "Any% practice", image: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1600" },
];

export default function Home() {
  return (
    <Layout title="Dubular Beta">
      <HomeHero />

      <section className="section">
        <div className="section__head">
          <h2>Highlights</h2>
        </div>
        <div className="feature-list">
          <div className="feature">
            <h3>Streams</h3>
            <p>HLS player with client-side chat. Try a demo channel.</p>
            <p style={{marginTop:".6rem"}}><Link href="/streams" className="btn btn--ghost">Browse Streams</Link></p>
          </div>
          <div className="feature">
            <h3>Leaderboards</h3>
            <p>See top creators and players across the platform.</p>
            <p style={{marginTop:".6rem"}}><Link href="/leaderboards" className="btn btn--ghost">View Leaderboards</Link></p>
          </div>
          <div className="feature">
            <h3>Pools</h3>
            <p>Join pools to win prizes on events and matches.</p>
            <p style={{marginTop:".6rem"}}><Link href="/pools" className="btn btn--ghost">Explore Pools</Link></p>
          </div>
          <div className="feature">
            <h3>Wallet</h3>
            <p>Edge-ready API routes for future on-chain actions.</p>
            <p style={{marginTop:".6rem"}}><Link href="/wallet" className="btn btn--ghost">Open Wallet</Link></p>
          </div>
        </div>
      </section>

      <CardGrid title="Top Streams" items={TOP_STREAMS} />

      <section className="section">
        <div className="section__head">
          <h2>Get Started</h2>
        </div>
        <p style={{opacity:.9,maxWidth:"68ch"}}>
          Jump into a live channel, or check out the rankings.
          This is an early beta — features and design will iterate quickly.
        </p>
        <div style={{display:"flex",gap:".6rem",marginTop:".8rem"}}>
          <Link href="/stream/dubular" className="btn btn--primary">Watch Dubular</Link>
          <Link href="/leaderboards" className="btn">View Rankings</Link>
        </div>
      </section>
    </Layout>
  );
}
