import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="text-center py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
          Dubular
        </h1>
        <p className="mt-4 text-lg text-white/70">
          Watch live streams, track leaderboards, and join the community — all in one place.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/streams"
            className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
          >
            Explore Streams
          </Link>
          <Link
            href="/rank"
            className="px-6 py-3 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition"
          >
            View Rankings
          </Link>
        </div>
      </div>
    </section>
  );
}
