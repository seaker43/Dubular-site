import React from "react";

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f4f4f8",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "2rem",
  },
  brand: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  brandDot: {
    display: "inline-block",
    width: "12px",
    height: "12px",
    backgroundColor: "#0070f3",
    borderRadius: "50%",
    marginRight: "8px",
  },
  brandText: {
    color: "#222",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#0070f3",
    fontWeight: "500",
  },
};

export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <span style={styles.brandDot}></span>
          <span style={styles.brandText}>dubUlar</span>
        </div>
      </header>

      <nav style={styles.nav}>
        <a href="#" style={styles.navLink}>Roadmap</a>
        <a href="#" style={styles.navLink}>Docs</a>
        <a href="#" style={styles.navLink}>Support</a>
      </nav>

      <main style={{ marginTop: "3rem" }}>
        <h1>🚀 Welcome to Dubular Beta</h1>
        <p>This is the test environment. UI and features coming soon!</p>
      </main>
    </div>
  );
}
