// pages/index.js
import Head from "next/head";

const trending = [
  { id: 1, title: "Cyber Drift", src: "/thumbnails/trending1.jpg" },
  { id: 2, title: "Night City", src: "/thumbnails/trending2.jpg" },
  { id: 3, title: "Synthwave FM", src: "/thumbnails/trending3.jpg" },
  { id: 4, title: "Neon Streets", src: "/thumbnails/trending4.jpg" },
];

const liveNow = [
  { id: "l1", title: "Arena Live", src: "/thumbnails/live1.jpg" },
  { id: "l2", title: "IRL Downtown", src: "/thumbnails/live2.jpg" },
  { id: "l3", title: "Music Session", src: "/thumbnails/live3.jpg" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>dubUlar — Home</title>
        <meta name="description" content="dubUlar home" />
      </Head>

      {/* Content clears fixed header via globals (main{ pt-20 }). 
          .page-container adds the responsive side padding. */}
      <main>
        <div className="page-container space-y-8 pb-24">
          {/* ===== Featured (simple static hero; replace src as needed) ===== */}
          <section className="featured-hero featured-glow-pink">
            <img
              src="/thumbnails/trending1.jpg"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-white text-2xl md:text-3xl font-extrabold">
                Featured Content
              </h2>
            </div>
          </section>

          {/* ===== Live (red glow + badge) ===== */}
          <section>
            <div className="section-header">
              <h2>Live</h2>
            </div>
            <div className="thumb-row">
              {liveNow.map((item) => (
                <article key={item.id} className="thumb-card glow-red">
                  <span className="live-badge">LIVE</span>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="thumb-img"
                    loading="lazy"
                  />
                  <div className="thumb-title">{item.title}</div>
                </article>
              ))}
            </div>
          </section>

          {/* ===== Trending (dual neon glow) ===== */}
          <section>
            <div className="section-header">
              <h2>Trending</h2>
            </div>
            <div className="thumb-row">
              {trending.map((item) => (
                <article key={item.id} className="thumb-card glow-dual">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="thumb-img"
                    loading="lazy"
                  />
                  <div className="thumb-title">{item.title}</div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
