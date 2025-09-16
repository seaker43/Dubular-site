import Link from "next/link";

export default function HomeHero() {
 return (
 <section className="home-hero">
 <div className="home-hero__text">
 <h1 className="glow home-hero__title">Dubular Beta</h1>
 <p className="home-hero__subtitle">
 Watch live streams, track leaderboards, and join prize pools — all in
 one place.
 </p>
 <div className="home-hero__cta">
 <Link className="btn btn--primary" href="/streams">
 Explore Streams
 </Link>
 <Link className="btn btn--ghost" href="/pools">
 Browse Pools
 </Link>
 </div>
 <p className="home-hero__deploy">
 Deployment check:&nbsp;
 <time suppressHydrationWarning>{new Date().toLocaleString()}</time>
 </p>
 </div>
 <div className="home-hero__media">
 <div className="home-hero__video-shell">
 <video
 src=""
 poster="https://images.pexels.com/photos/394533/pexels-photo-394533.jpeg?auto=compress&cs=tinysrgb&w=1600"
 aria-label="Streams preview"
 playsInline
 muted
 autoPlay
 loop
 />
 </div>
 </div>
 </section>
 );
}
