export const config = { runtime: "experimental-edge" };

import Head from "next/head";
import CategoryRow from "../components/home/CategoryRow";

const demo = (n, seed) =>
  Array.from({ length: n }).map((_, i) => ({
    title: `Night Raid Tactics #${i + 1}`,
    thumb: `https://source.unsplash.com/random/800x45${i}?sig=${seed}${i}`
  }));

export default function Home() {
  return (
    <>
      <Head><title>dubUlar</title></Head>
      <main className="pb-20 pt-2">
        <CategoryRow title="Trending Now" href="/trending" items={demo(10, "a")} />
        <CategoryRow title="Esports" href="/esports" items={demo(10, "b")} />
      </main>
    </>
  );
}
