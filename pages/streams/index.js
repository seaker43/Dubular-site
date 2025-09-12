import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const CHANNELS = [
  { slug: "dubular", title: "Dubular" },
  { slug: "starplayer", title: "Star Player" },
  { slug: "speedrunner", title: "Speed Runner" },
];

export default function Streams() {
  return (
    <Layout title="Streams">
      <h1>Streams</h1>
      <ul className="stream-list">
        {CHANNELS.map((c) => (
          <li key={c.slug}>
            <Link href={`/stream/${c.slug}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const config = { runtime: 'experimental-edge' };
