import Head from "next/head";
import Link from "next/link";
import Shelf from "../ui/Shelf";
import demo from "../ui/demo";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
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
