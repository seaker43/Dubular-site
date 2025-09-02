// pages/index.js
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main style={{ maxWidth: 960, margin: '80px auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, marginBottom: 16 }}>
          Dubular Beta 🚀
        </h1>
        <p style={{ opacity: 0.8, marginBottom: 32 }}>
          Deployment check: {new Date().toLocaleString()}
        </p>
        <div style={{ display: 'grid', gap: 16 }}>
          <Link href="/leaderboards">Leaderboards</Link>
          <Link href="/pools">Pools</Link>
          <Link href="/wallet">Wallet</Link>
        </div>
      </main>
    </Layout>
  );
}
