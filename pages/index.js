import Head from "next/head";
import CategoryRow from "../components/home/CategoryRow";

export const config = { runtime: "experimental-edge" };

export default function Home() {
  return (
    <>
      <Head>
        <title>dubUlar</title>
      </Head>

      <main style={{ paddingBottom: 90 /* keep above fixed bottom bar */ }}>
        <CategoryRow title="Trending Now" />
        <CategoryRow title="Esports" />
        <CategoryRow title="Mobile Streams" />
      </main>
    </>
  );
}
