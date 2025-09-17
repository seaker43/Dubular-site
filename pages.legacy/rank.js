export const dynamic ="force-dynamic";
// pages/rank.js
import Head from"next/head";

export default function Rank() {
 return (
 <>
 <Head>
 <title>dubUlar — Rank</title>
 <meta
 name="description"
 content="Top streamers, gifters, and communities"
 />
 </Head>

 <main>
 <div className="sm: lg: space-y-8">
 {/* Top 5 Streamers */}
 <section>
 <div className="sm: lg: section-header">
 <h2>Top 5 Streamers</h2>
 </div>
 <div className="sm: lg: vthumb-grid">
 {[1, 2, 3, 4, 5].map((i) => (
 <article key={`s-${i}`} className="vthumb-card glow-dual">
 <img
 src={`/thumbnails/trending${(i % 4) + 1}.jpg`}
 alt={`Streamer ${i}`}
 className="vthumb-img"
 />
 <div className="sm: lg: vthumb-gradient" />
 <div className="sm: lg: vthumb-title">Streamer #{i}</div>
 </article>
 ))}
 </div>
 </section>

 {/* Top 5 Gifters */}
 <section>
 <div className="sm: lg: section-header">
 <h2>Top 5 Gifters</h2>
 </div>
 <div className="sm: lg: vthumb-grid">
 {[1, 2, 3, 4, 5].map((i) => (
 <article key={`g-${i}`} className="vthumb-card glow-dual">
 <img
 src={`/thumbnails/trending${(i % 4) + 1}.jpg`}
 alt={`Gifter ${i}`}
 className="vthumb-img"
 />
 <div className="sm: lg: vthumb-gradient" />
 <div className="sm: lg: vthumb-title">Gifter #{i}</div>
 </article>
 ))}
 </div>
 </section>

 {/* Top 5 Communities */}
 <section>
 <div className="sm: lg: section-header">
 <h2>Top 5 Communities</h2>
 </div>
 <div className="sm: lg: vthumb-grid">
 {[1, 2, 3, 4, 5].map((i) => (
 <article key={`c-${i}`} className="vthumb-card glow-dual">
 <img
 src={`/thumbnails/trending${(i % 4) + 1}.jpg`}
 alt={`Community ${i}`}
 className="vthumb-img"
 />
 <div className="sm: lg: vthumb-gradient" />
 <div className="sm: lg: vthumb-title">Community #{i}</div>
 </article>
 ))}
 </div>
 </section>
 </div>
 </main>
 </>
 );
}

export async function getServerSideProps(){return{props:{}}}

export const config = { runtime: 'experimental-edge' };
