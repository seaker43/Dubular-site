import Head from "next/head";
import Row from "../ui/Row";
import StreamCard from "../ui/StreamCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular</title>
      </Head>
      <main className="bg-neutral-950 text-white min-h-screen">
        <section className="px-6 py-8">
          <h2 className="text-xl font-bold mb-3">Trending Now</h2>
          <Row>
            <StreamCard title="Night Raid Tactics #1" live thumbnail="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
            <StreamCard title="Street Battle 9" live thumbnail="https://images.unsplash.com/photo-1518770660439-4636190af475" />
          </Row>
        </section>

        <section className="px-6 py-8">
          <h2 className="text-xl font-bold mb-3">Recommended</h2>
          <Row>
            <StreamCard title="AI Coding Jam" thumbnail="https://images.unsplash.com/photo-1581091012184-5c7b4c8e95a6" />
            <StreamCard title="Lo-Fi Study Session" thumbnail="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1" />
          </Row>
        </section>

        <section className="px-6 py-8">
          <h2 className="text-xl font-bold mb-3">Live Channels</h2>
          <Row>
            <StreamCard title="Retro Arcade Night" live thumbnail="https://images.unsplash.com/photo-1551360038-95fdd4f54a05" />
            <StreamCard title="Travel IRL" live thumbnail="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" />
          </Row>
        </section>

        <section className="px-6 py-8">
          <h2 className="text-xl font-bold mb-3">Popular Now</h2>
          <Row>
            <StreamCard title="Synthwave Night" thumbnail="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" />
            <StreamCard title="Studio Session" thumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
          </Row>
        </section>
      </main>
    </>
  );
}
