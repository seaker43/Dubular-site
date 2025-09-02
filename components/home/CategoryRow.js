import StreamCard from "./StreamCard";

export default function CategoryRow({ title = "Trending Now" }) {
  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: 12,
    marginBottom: 8,
  };
  const h2 = {
    fontSize: 22,
    lineHeight: "28px",
    fontWeight: 800,
    color: "rgba(255,255,255,0.95)",
    margin: 0,
  };
  const seeAllBtn = {
    fontSize: 14,
    color: "#67e8f9",
    background: "rgba(103,232,249,0.12)",
    padding: "6px 12px",
    borderRadius: 12,
    border: "1px solid rgba(103,232,249,0.35)",
  };
  const row = {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    gap: 12,
    padding: "0 12px 12px",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
  };

  // placeholder titles while backend/data isn’t wired
  const placeholders = Array.from({ length: 12 }, (_, i) => `Night Raid Tactics #${i + 1}`);

  return (
    <section style={{ margin: "8px 0 20px" }}>
      <div style={header}>
        <h2 style={h2}>{title}</h2>
        <button type="button" style={seeAllBtn}>See all ▸</button>
      </div>

      <div style={row} className="hide-scrollbars">
        {placeholders.map((t, i) => (
          <div key={i} style={{ scrollSnapAlign: "start" }}>
            <StreamCard title={t} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
