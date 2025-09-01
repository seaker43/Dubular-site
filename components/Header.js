// components/Header.js
import Link from "next/link";

export default function Header() {
  const wrap = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "saturate(180%) blur(10px)",
    background: "rgba(15,15,20,.75)",
    borderBottom: "1px solid rgba(255,255,255,.06)",
  };
  const bar = {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    gap: 18,
    color: "#eaeaf0",
  };
  const brand = { fontWeight: 700, letterSpacing: .2, marginRight: "auto" };
  const link = { color: "#eaeaf0", textDecoration: "none", opacity: .9 };
  const pill = {
    padding: "6px 12px",
    borderRadius: 12,
    background: "#2ac1ff1a",
    border: "1px solid #2ac1ff40",
  };

  return (
    <header style={wrap}>
      <nav style={bar}>
        <Link href="/" style={{...link, ...brand}}>Dubular</Link>
        <Link href="/pricing" style={link}>Pricing</Link>
        <a href="/api/health" style={{...link, ...pill}}>Status</a>
        <a href="https://github.com/seaker43/Dubular-site" style={link}>GitHub</a>
      </nav>
    </header>
  );
}
