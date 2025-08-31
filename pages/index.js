// pages/index.js
import React from "react";

export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <span style={styles.brandDot}></span>
          <span style={styles.brandText}>dubUlar</span>
        </div>

        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Roadmap</a>
          <a href="#" style={styles.navLink}>Docs</a>
          <a href="#" style={styles.navLink}>Support</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Welcome to the dubUlar <span style={styles.beta}>Beta</span></h1>
        <p style={styles.tagline}>
          The futuristic live-streaming platform for creators and their communities.
        </p>

        <div style={styles.ctaRow}>
          <a href="#create" style={{ ...styles.btn, ...styles.btnPrimary }}>Create a Room</a>
          <a href="#explore" style={{ ...styles.btn, ...styles.btnGhost }}>Explore Features</a>
        </div>

        <section style={styles.panelGrid}>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>Ultra-low latency</h3>
            <p style={styles.panelBody}>Built on edge functions for instant interactions.</p>
          </div>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>Clips & Highlights</h3>
            <p style={styles.panelBody}>Auto-generate shareable moments from any stream.</p>
          </div>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>Community Tools</h3>
            <p style={styles.panelBody}>Roles, badges, polls, and membership tiers.</p>
          </div>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>Creator Monetization</h3>
            <p style={styles.panelBody}>Tips, subs, and sponsor slots out of the box.</p>
          </div>
        </section>

        <section id="create" style={styles.card}>
          <h2 style={styles.cardTitle}>Spin up your first stream</h2>
          <p style={styles.cardBody}>
            This button will later wire up to the actual room creation flow. For now, it’s a stub so we
            can deploy quickly and start testing the shell.
          </p>
          <button style={{ ...styles.btn, ...styles.btnPrimary, width: 220 }}>Start a test room</button>
        </section>

        <footer style={styles.footer}>
          <span>© {new Date().getFullYear()} dubUlar • Beta</span>
        </footer>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg,#0b1220 0%, #0d1324 50%, #0f1428 100%)",
    color: "#e6f0ff",
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Helvetica,Arial,system-ui",
  },
  header: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "20px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  brandDot: {
    width: 14, height: 14, borderRadius: 9999,
    background: "radial-gradient(circle at 30% 30%, #37f, #0ff)",
    boxShadow: "0 0 18px rgba(0,200,255,.7)",
  },
  brandText: {
    fontWeight: 800, letterSpacing: .4, textTransform: "uppercase",
    background: "linear-gradient(90deg,#8ff,#0ff)", WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  nav: { display: "flex", gap: 18 },
  navLink: { color: "#a9b8d4", textDecoration: "none", fontSize: 14 },
  main: { maxWidth: 1120, margin: "0 auto", padding: "40px 16px 80px" },
  title: { fontSize: 42, margin: "10px 0 8px" },
  beta: {
    padding: "4px 10px", borderRadius: 9999, marginLeft: 8, fontSize: 18,
    background: "rgba(0,200,255,.12)", border: "1px solid rgba(0,200,255,.35)",
  },
  tagline: { color: "#b8c7e6", fontSize: 18, margin: "6px 0 24px", maxWidth: 680 },
  ctaRow: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 },
  btn: {
    padding: "12px 18px", borderRadius: 10, border: "1px solid transparent",
    fontWeight: 600, textDecoration: "none", display: "inline-block",
  },
  btnPrimary: {
    background: "linear-gradient(90deg,#19c0ff,#6ef9ff)",
    color: "#041221", borderColor: "rgba(0,200,255,.65)",
    boxShadow: "0 10px 30px rgba(0,200,255,.15)",
  },
  btnGhost: {
    background: "transparent", color: "#cde3ff", borderColor: "rgba(255,255,255,.18)",
  },
  panelGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 14,
  },
  panel: {
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 14,
    padding: 16,
  },
  panelTitle: { margin: 0, fontSize: 18 },
  panelBody: { color: "#a9b8d4", marginTop: 8, lineHeight: 1.5 },
  card: {
    marginTop: 28,
    padding: 20,
    background: "rgba(8,20,40,.55)",
    border: "1px solid rgba(0,200,255,.18)",
    borderRadius: 16,
  },
  cardTitle: { margin: "0 0 6px", fontSize: 24 },
  cardBody: { color: "#a9b8d4", margin: "0 0 14px" },
  footer: { marginTop: 36, color: "#90a5c6", fontSize: 13 },
};
