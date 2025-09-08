import Head from "next/head";
import Header from "./Header";
import BottomBar from "./BottomBar";

export default function Layout({ children, title = "dubUlar" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#09141a" />
      </Head>
      <Header />
      <main className="min-h-screen bg-black pt-16 pb-20">
        {children}
      </main>
      <BottomBar />
    </>
  );
}
