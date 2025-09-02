import Link from "next/link";
import Layout from "../../components/Layout";

const DEMO = [
  {
    id: "dubular",
    title: "Dubular Dev Stream",
    game: "Building the Platform",
    hls: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: "starplayer",
    title: "Star Player",
    game: "Space Raiders",
    hls: "https://test-streams.mux.dev/pts36M/pts36M.m3u8",
  },
  {
    id: "speedrunner",
    title: "Speed Runner",
    game: "Any% Practice",
    hls: "https://test-streams.mux.dev/test_001/stream.m3u8",
  },
];

export async function getStaticProps() {
  return { props: { streams: DEMO } };
}

export default function Streams({ streams }) {
  return (
    <Layout>
      <main className="stream-page" style={{ gridTemplateColumns: "1fr" }}>
        <section className="grid">
          {streams.map((s) => (
            <article className="card" key={s.id}>
              <div className="badge" style={{ marginBottom: 8 }}>LIVE</div>
              <h3>{s.title}</h3>
              <p>{s.game}</p>
              <Link className="btn-link" href={`/stream/${s.id}?src=${encodeURIComponent(s.hls)}`}>
                Watch
              </Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
