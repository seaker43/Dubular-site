import Head from "next/head";
import BottomBar from "./BottomBar";
import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "dubUlar"}</title>
        <meta name="theme-color" content="#09182a" />
      </Head>

      <Header />

      {/* push content below fixed header */}
      <main className="min-h-screen bg-[#0b0f1a] pt-14 pb-20">
        {children}
      </main>

      <BottomBar />
    </>
  );
}
