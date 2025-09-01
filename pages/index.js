// pages/index.js
import Image from 'next/image';

export default function Home() {
  const features = [
    { title: 'Fast', desc: 'Edge-rendered on Cloudflare for speed.' },
    { title: 'Simple', desc: 'Lightweight Next.js pages router.' },
    { title: 'Scalable', desc: 'Grows with your product.' },
  ];

  return (
    <main className="container">
      <header className="hero">
        <h1>Dubular is live</h1>
        <p className="tagline">
          The fastest way to ship AI-powered content and tools.
        </p>
        <a className="cta" href="#get-started">Get started</a>
      </header>

      <section className="poster">
        <Image
          src="/poster4.jpg"
          alt="Dubular poster"
          width={1400}
          height={800}
          priority
          style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
        />
      </section>

      <section className="grid">
        {features.map((f) => (
          <div key={f.title} className="card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <a id="get-started" href="mailto:hello@dubular.live">Contact</a>
        <span>·</span>
        <a href="/privacy">Privacy</a>
      </footer>
    </main>
  );
}
