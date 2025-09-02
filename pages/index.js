<<<<<<< HEAD
// pages/index.js
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular Beta</title>
        <meta name="description" content="Dubular — AI-powered video dubbing made easy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Social */}
        <meta property="og:title" content="Dubular" />
        <meta property="og:description" content="AI-powered video dubbing made easy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beta.dubular.live" />
        <meta property="og:image" content="/og.jpg" />
      </Head>

      <Navbar />

      <main className="container">
        <Hero />

        <Features />

        <section className="ctaCard">
          <h2>Ready to try Dubular?</h2>
          <p>Join the beta and get early access to new voice packs and languages.</p>
          <div className="row gap">
            <a className="btn btnPrimary" href="#signup">Join the Beta</a>
            <a className="btn btnGhost" href="#learn">Learn more</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
=======
import Link from "next/link";
import Layout from "../components/Layout";

export async function getStaticProps() {
  // Static build fetch from our mock API (also works SSR if you switch to getServerSideProps)
  const featured = [
    { id: "pool-1", title: "Nova vs Luma (DJ Battle)", pot: 12450 },
    { id: "pool-2", title: "Speedrunner Showdown", pot: 6200 },
  ];
  return { props: { featured } };
}

export default function Home({ featured }) {
  return (
    <Layout>
      <h1>Dubular Live</h1>
      <p className="muted">Stream • Compete • Earn Dubular Tokens</p>

      <section className="section">
        <div className="section-head">
          <h2>Featured Pools</h2>
          <Link className="cta" href="/pools">View all</Link>
        </div>

        <div className="grid">
          {featured.map((p) => (
            <Link key={p.id} href={`/pools/${p.id}`} className="card">
              <h3>{p.title}</h3>
              <p>Current Pot: <strong>{p.pot.toLocaleString()} DBL</strong></p>
              <span className="chip">Head-to-Head</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="quick">
        <Link className="btn" href="/leaderboards">Leaderboards</Link>
        <Link className="btn" href="/wallet">My Wallet</Link>
      </section>
    </Layout>
>>>>>>> e01c34ad (feat(ui): Leaderboards, Pools, Wallet + Edge API routes)
  );
}
