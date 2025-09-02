// pages/index.js
import Head from "next/head";
import Link from "next/link";

// Prefer site Layout if present
let Layout;
try { Layout = require("../components/Layout").default; } catch { Layout = ({children}) => <>{children}</>; }

export default function Home(){
  return (
    <Layout>
      <Head>
        <title>Dubular — Streams, Pools & Leaderboards</title>
        <meta name="description" content="Dubular: Watch streams, join pools, and climb leaderboards in a slick dark-cyan UI." />
      </Head>

      <header className="navbar">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",padding:"0.9rem 1rem",maxWidth:1100,margin:"0 auto"}}>
          <Link href="/"><span style={{fontWeight:800, letterSpacing:".3px"}}>Dubular</span></Link>
          <nav style={{display:"flex",gap:"1rem",alignItems:"center"}}>
            <Link href="/streams">Streams</Link>
            <Link href="/pools">Pools</Link>
            <Link href="/leaderboards">Leaderboards</Link>
            <Link href="/wallet" className="btn btn-primary">Wallet</Link>
          </nav>
        </div>
      </header>

      <main style={{maxWidth:1100, margin:"0 auto", padding:"clamp(16px,3vw,24px)"}}>
        <section className="hero">
          <h1 className="dubular-headline">Stream. Compete. <span style={{whiteSpace:"nowrap"}}>Go Dubular.</span></h1>
          <p className="subhead" style={{marginTop:"10px"}}>
            A fast, creator-first platform with pools and leaderboards. Clean dark UI, cyan glow accents — no purple here.
          </p>
          <div className="hero-cta">
            <Link href="/streams" className="btn btn-primary">Browse Streams</Link>
            <Link href="/pools" className="btn">Explore Pools</Link>
            <Link href="/leaderboards" className="btn">View Leaderboards</Link>
          </div>
        </section>

        <section style={{marginTop:"clamp(18px,3vw,24px)"}}>
          <div className="grid">
            <article className="card">
              <h3 style={{marginTop:0, marginBottom:6}}>Live Streams</h3>
              <p className="subhead" style={{marginTop:0}}>Low-latency HLS player with a clean chat UI.</p>
              <Link href="/streams" className="btn" style={{marginTop:12}}>Open Streams</Link>
            </article>
            <article className="card">
              <h3 style={{marginTop:0, marginBottom:6}}>Pools</h3>
              <p className="subhead" style={{marginTop:0}}>Join pools, track entries, and follow outcomes.</p>
              <Link href="/pools" className="btn" style={{marginTop:12}}>Browse Pools</Link>
            </article>
            <article className="card">
              <h3 style={{marginTop:0, marginBottom:6}}>Leaderboards</h3>
              <p className="subhead" style={{marginTop:0}}>See who’s climbing. Filter by game or timeframe.</p>
              <Link href="/leaderboards" className="btn" style={{marginTop:12}}>See Rankings</Link>
            </article>
            <article className="card">
              <h3 style={{marginTop:0, marginBottom:6}}>Wallet</h3>
              <p className="subhead" style={{marginTop:0}}>Manage your balance and recent activity.</p>
              <Link href="/wallet" className="btn" style={{marginTop:12}}>Open Wallet</Link>
            </article>
          </div>
          <p className="footer">© {new Date().getFullYear()} Dubular</p>
        </section>
      </main>
    </Layout>
  );
}
