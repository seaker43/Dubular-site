export default function StreamCard({ title = "Untitled", index = 0 }) {
  const card = {
    width: 160,
    flex: "0 0 auto",          // <- prevents wrapping into columns
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    overflow: "hidden",
  };
  const thumbWrap = {
    position: "relative",
    width: "100%",
    height: 90,
    overflow: "hidden",
  };
  const livePill = {
    position: "absolute",
    top: 8,
    left: 8,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 800,
    color: "#fff",
    background: "#ef476f",
    borderRadius: 999,
  };
  const titleStyle = {
    padding: "8px 10px 10px",
    color: "rgba(255,255,255,0.92)",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.2,
  };

  // simple, deterministic placeholder image
  const src = `https://picsum.photos/seed/dubular-${(index % 40) + 1}/640/360`;

  return (
    <article style={card}>
      <div style={thumbWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          width="320"
          height="180"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loading="lazy"
        />
        <span style={livePill}>LIVE</span>
      </div>
      <div style={titleStyle}>{title}</div>
    </article>
  );
}
