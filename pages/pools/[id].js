import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";

const POOLS = {
  "pool-1": {
    title: "Nova vs Luma (DJ Battle)",
    pot: 12450,
    contestants: [{ name: "DJ Nova", id: "nova" }, { name: "LumaBeats", id: "luma" }],
    status: "upcoming",
  },
  "pool-2": {
    title: "Speedrunner Showdown",
    pot: 6200,
    contestants: [{ name: "SpeedyJay", id: "jay" }, { name: "GlitchFox", id: "fox" }],
    status: "live",
  },
  "pool-3": {
    title: "FPS Aiming Duel",
    pot: 3110,
    contestants: [{ name: "Crosshair", id: "ch" }, { name: "TapTap", id: "tt" }],
    status: "tomorrow",
  },
};

export async function getStaticPaths() {
  return { paths: Object.keys(POOLS).map((id) => ({ params: { id } })), fallback: false };
}
export async function getStaticProps({ params }) {
  return { props: { pool: POOLS[params.id] } };
}

export default function PoolDetail({ pool }) {
  return (
    <Layout>
      <Link href="/pools" className="back">← Back to Pools</Link>
      <h1>{pool.title}</h1>
      <p className="muted">Status: {pool.status}</p>

      <div className="pool-box">
        <div className="pot">Pot: <strong>{pool.pot.toLocaleString()} DBL</strong></div>
        <div className="contestants">
          {pool.contestants.map((c) => (
            <button key={c.id} className="btn">
              Bet on {c.name}
            </button>
          ))}
        </div>
        <small className="muted">Placing a bet will lock DBL until the pool resolves.</small>
      </div>
    </Layout>
  );
}
