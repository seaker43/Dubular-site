export const runtime = 'experimental-edge';

import Link from 'next/link';
import Layout from '../components/Layout';
import StreamCard from '../components/StreamCard';

const demoStreams = [
  { slug: 'dubular', title: 'Speedrun Gauntlet', streamer: 'Dubular', viewers: 1240, thumbnailUrl: '/img/streams/dubular.jpg', hot: true },
  { slug: 'starplayer', title: 'Ranked Push', streamer: 'StarPlayer', viewers: 860, thumbnailUrl: '/img/streams/starplayer.jpg', hot: false },
  { slug: 'speedrunner', title: 'Any% Practice', streamer: 'SpeedRunner', viewers: 540, thumbnailUrl: '/img/streams/speedrunner.jpg', hot: false },
];

export default function Home() {
  return (
    <Layout>
      <section className="rounded-3xl p-8 md:p-10 bg-gradient-to-b from-[#0a1118] to-[#071018] border border-white/5 shadow-[0_0_80px_rgba(0,255,255,0.09)]">
        <h1 className="dubular-headline text-4xl md:text-5xl leading-tight">Stream. Compete. Go Dubular.</h1>
        <p className="mt-4 text-white/70">A fast, creator-first platform with leaderboards. Clean dark UI, cyan glow accents — no purple here.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/streams" className="btn-cyan">Browse Streams</Link>
          <Link href="/leaderboards" className="btn-cyan-outline">View Rankings</Link>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Live Streams</h2>
          <Link href="/streams" className="text-[var(--dubular-cyan-300)] hover:underline">See all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoStreams.map(s => <StreamCard key={s.slug} {...s} />)}
        </div>
      </section>

      <section className="mt-8 rounded-2xl p-6 bg-[#0a0f14]/70 border border-white/5">
        <h3 className="text-lg font-semibold">Rankings</h3>
        <p className="text-white/60 mt-1">See who’s climbing. Filter by game or timeframe.</p>
        <Link href="/leaderboards" className="btn-cyan mt-4 inline-block">See Rankings</Link>
      </section>

      <section className="mt-6 rounded-2xl p-6 bg-[#0a0f14]/70 border border-white/5">
        <h3 className="text-lg font-semibold">Wallet</h3>
        <p className="text-white/60 mt-1">Manage your balance and recent activity.</p>
        <Link href="/wallet" className="btn-cyan mt-4 inline-block">Open Wallet</Link>
      </section>
    </Layout>
  );
}
