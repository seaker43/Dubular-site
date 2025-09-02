import buildInfo from "../lib/build-info.json";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="app">
      <header className="nav">
        <div className="brand"><Link href="/">Dubular</Link></div>
        <nav className="links">
          <Link href="/pools">Pools</Link>
            <Link href="/streams" className="mx-3 hover:underline">Streams</Link>
          <Link href="/leaderboards">Leaderboards</Link>
          <Link href="/wallet">Wallet</Link>
        </nav>
      </header>
      <main className="app-shell" className="container">{children}</main>
        <div style={{fontSize:"12px",opacity:.6,marginTop:"6px"}}>Deployment check: {new Date(buildInfo.builtAt).toLocaleString()}</div>
      <footer className="footer">© {new Date().getFullYear()} Dubular</footer>
    </div>
  );
}
