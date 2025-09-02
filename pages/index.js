export const config = { runtime: "experimental-edge" };

import Head from "next/head";
import CategoryRow from "../components/home/CategoryRow";

const demo = (n, seed) =>
  Array.from({ length: n }).map((_, i) => ({
    title: `Night Raid Tactics #${i + 1}`,
    thumb: `https://images.unsplash.com/photo-15${seed}${(i%9)+1}51257${700+i}-dfb367046420?q=80&w=1200&auto=format&fit=crop`,
  }));

export default function Home() {
  return (
    <>
      <Head><title>dubUlar</title></Head>

      <main className="pb-20 pt-2">
        <section className="px-4 mt-2">
          <h1 className="text-3xl font-bold">Trending Now</h1>
        </section>
        <CategoryRow title="Trending Now" href="/trending" items={demo(10, "1")} />

        <section className="px-4 mt-6">
          <h1 className="text-3xl font-bold">Esports</h1>
        </section>
        <CategoryRow title="Esports" href="/esports" items={demo(10, "2")} />
      </main>
    </>
  );
}
