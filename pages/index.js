import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head><title>Dubular LIVE TEST</title></Head>
      <main style={{ minHeight: "100vh", padding: "24px" }}>
        <h1 style={{ color: "#00FFFF" }}>Dubular LIVE TEST v3 🚀</h1>
        <p>Time: {new Date().toLocaleString()}</p>
      </main>
    </>
  );
}

// keep parity with other pages
export const config = { runtime: 'experimental-edge' };
