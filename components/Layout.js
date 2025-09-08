import Head from "next/head";
import BottomBar from "./BottomBar";
import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "dubUlar"}</title>
        <meta name="theme-color" content="#000000" />
      </Head>

      <Header />   {/* ✅ Only this one reference */}

      <main className="min-h-screen bg-black pt-14 pb-20">
        {children}
      </main>

      <BottomBar />
    </>
  );
}
