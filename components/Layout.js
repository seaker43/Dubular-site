import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title = "Dubular", children }) {
  const pageTitle = title ? `${title} • Dubular` : "Dubular";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="theme-color" content="#00FF66" />
      </Head>

      {/* page chrome */}
      <div className="min-h-screen bg-[rgb(8,10,12)] text-zinc-100">
        <main className="pb-[96px]">{children}</main>
      </div>

      <Navbar />
    </>
  );
}
