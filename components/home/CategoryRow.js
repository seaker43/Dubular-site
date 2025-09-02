import StreamCard from "./StreamCard";

export default function CategoryRow({ title = "Trending Now" }) {
  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: 12,
    marginBottom: 8,
  };
  const h2 = { fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.95)", margin: 0 };
  const seeAllBtn = {
    fontSize: 14,
    color: "#67e8f9",         // cyan (fits your scheme)
    background: "rgba(103,232,249,0.12)",
    padding: "8px 14px",
    borderRadius: 12,
    border: "1px solid rgba(103,232,249,0.35)",
  };
  const row = {
    display: "flex",
    overflowX: "auto",
    padding: "0 6px 2px",
    WebkitOverflowScrolling: "touch",
  };

  const placeholders = Array.from({ length: 12 }, (_, i) => `Night Raid Tactics #${i + 1}`);

  return (
    <section style={{ marginBottom: 20 }}>
      <div style={header}>
        <h2 style={h2}>{title}</h2>
        <button type="button" style={seeAllBtn}>See all ▸</button>
      </div>

      <div style={row}>
        {placeholders.map((t, i) => (
          <StreamCard key={i} title={t} index={i} />
        ))}
      </div>
    </section>
  );
}
