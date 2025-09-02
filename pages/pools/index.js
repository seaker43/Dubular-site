import Link from "next/link";
import Layout from "../../components/Layout";

export async function getStaticProps() {
  const pools = [
    { id: "pool-1", title: "Nova vs Luma (DJ Battle)", pot: 12450, startsIn: "2h" },
    { id: "pool-2", title: "Speedrunner Showdown", pot: 6200, startsIn: "Live now" },
    { id: "pool-3", title: "FPS Aiming Duel", pot: 3110, startsIn: "Tomorrow" },
  ];
  return { props: { pools } };
}

export default function Pools({ pools }) {
  return (
    <Layout>
      <h1>Pools</h1>
      <p className="muted">Bet your DBL on streamer-vs-streamer showdowns.</p>
      <div className="grid">
        {pools.map((p) => (
          <Link key={p.id} href={`/pools/${p.id}`} className="card">
            <h3>{p.title}</h3>
            <p>Pot: <strong>{p.pot.toLocaleString()} DBL</strong></p>
            <span className="chip">{p.startsIn}</span>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
