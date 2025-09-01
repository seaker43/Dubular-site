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
  );
}
