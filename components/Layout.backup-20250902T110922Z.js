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
      <footer className="footer">© {new Date().getFullYear()} Dubular</footer>
    </div>
  );
}
