import Head from "next/head";
import Link from "next/link";
import DubularMark from "../ui/DubularMark";
import Shelf from "../ui/Shelf";
import demo from "../ui/demo";

export default function Home() {
  return (
    <>
      <Head><title>Dubular</title></Head>
      <header className="header">
        <div className="header-inner">
          <Link href="/"><img src="/dubular-logo.svg" alt="Dubular" style={{height:54,display:"block"}}/></Link>
        </div>
      </header>
      <main className="main">
        <Shelf title="Trending Now" href="#" items={demo.trending}/>
        <Shelf title="Recommended" href="#" items={demo.recommended}/>
        <Shelf title="Live Channels" href="#" items={demo.live}/>
        <Shelf title="Popular Now" href="#" items={demo.popular}/>
      </main>
    </>
  );
}
