// pages/find.js
import Head from "next/head";
import { Search } from "lucide-react";

export default function Find() {
  return (
    <>
      <Head>
        <title>dubUlar — Find</title>
        <meta name="description" content="Search creators and streams" />
      </Head>

      <main>
        {/* Search bar: first child inside main, sits directly under header */}
        <div className="search-wrap">
          <form className="search-bar" action="/find" method="get">
            <Search size={18} className="opacity-80" />
            <input
              type="text"
              name="q"
              placeholder="Search creators, streams, categories…"
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        {/* Example results row (use your real data) */}
        <section className="mt-4">
          <div className="section-header">
            <h2>Trending</h2>
          </div>
          <div className="thumb-row">
            {[1,2,3,4,5,6].map((i) => (
              <article key={i} className="thumb-card glow-dual">
                <img
                  src={`/thumbnails/trending${((i-1)%4)+1}.jpg`}
                  alt={`Trending ${i}`}
                  className="thumb-img"
                />
                <div className="thumb-title">Trending #{i}</div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
