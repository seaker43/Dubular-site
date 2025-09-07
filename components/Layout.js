// components/Layout.js
import Head from "next/head";
import BottomBar from "./BottomBar";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "dubUlar"}</title>
        <meta name="theme-color" content="#09182a" />
      </Head>

      <div className="min-h-screen bg-[#0b0f1a]">
        {children}
      </div>

      <BottomBar />
    </>
  );
}
