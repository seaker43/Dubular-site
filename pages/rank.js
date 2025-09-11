import React from "react";
// pages/rank.js
import Head from "next/head";

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
        <div className="space-y-8 pb-24 px-2">
          {/* Top 5 Streamers */}
          <section>
            <div className="section-header">
              <h2>Top 5 Streamers</h2>
            </div>
            <div className="vthumb-grid">
              {[1, 2, 3, 4, 5].map((i) => (
                <article key={`s-${i}`} className="vthumb-card glow-dual">
                  <img
                    src={`/thumbnails/trending${(i % 4) + 1}.jpg`}
                    alt={`Streamer ${i}`}
                    className="vthumb-img"
                  />
                  <div className="vthumb-gradient" />
                  <div className="vthumb-title">Streamer #{i}</div>
                </article>
              ))}
            </div>
          </section>

          {/* Top 5 Gifters */}
          <section>
            <div className="section-header">
              <h2>Top 5 Gifters</h2>
            </div>
            <div className="vthumb-grid">
              {[1, 2, 3, 4, 5].map((i) => (
                <article key={`g-${i}`} className="vthumb-card glow-dual">
                  <img
                    src={`/thumbnails/trending${(i % 4) + 1}.jpg`}
                    alt={`Gifter ${i}`}
                    className="vthumb-img"
                  />
                  <div className="vthumb-gradient" />
                  <div className="vthumb-title">Gifter #{i}</div>
                </article>
              ))}
            </div>
          </section>

          {/* Top 5 Communities */}
          <section>
            <div className="section-header">
              <h2>Top 5 Communities</h2>
            </div>
            <div className="vthumb-grid">
              {[1, 2, 3, 4, 5].map((i) => (
                <article key={`c-${i}`} className="vthumb-card glow-dual">
                  <img
                    src={`/thumbnails/trending${(i % 4) + 1}.jpg`}
                    alt={`Community ${i}`}
                    className="vthumb-img"
                  />
                  <div className="vthumb-gradient" />
                  <div className="vthumb-title">Community #{i}</div>
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
