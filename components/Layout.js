import Head from "next/head";
import BottomBar from "./BottomBar";
export default function Layout({ children, title = "Dubular" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#09120A" />
      </Head>
      <div className={["min-h-screen bg-[#0b0f0c] text-white","pb-20"].join(" ")} style={{paddingBottom:"calc(4.25rem + env(safe-area-inset-bottom))"}}>
        {children}
      </div>
      <BottomBar />
    </>
  );
}
