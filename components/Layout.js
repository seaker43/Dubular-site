import Head from "next/head";
import BottomBar from "./BottomBar.jsx";

export default function Layout({ title = "Dubular", children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-black text-white pb-20">
        {children}
      </main>
      <BottomBar />
    </>
  );
}
