export default function StreamCard({ title, index }) {
  const card = {
    width: 160,             // ~Netflix mobile card width
    flex: "0 0 160px",
  };
  const imgWrap = {
    position: "relative",
    width: "100%",
    height: 90,             // 16:9-ish thumbnail
    overflow: "hidden",
    borderRadius: 12,
  };
  const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };
  const livePill = {
    position: "absolute",
    top: 6,
    left: 6,
    background: "#e11d48", // red
    color: "#fff",
    fontSize: 10,
    padding: "2px 6px",
    borderRadius: 6,
    letterSpacing: 0.5,
  };
  const titleStyle = {
    marginTop: 6,
    fontSize: 13,
    color: "rgba(255,255,255,0.9)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div style={{ ...card, marginInline: 6 }}>
      <div style={imgWrap}>
        <img
          src={`https://picsum.photos/seed/dub${index}/320/180`}
          alt={title}
          style={img}
        />
        <span style={livePill}>LIVE</span>
      </div>
      <div style={titleStyle}>{title}</div>
    </div>
  );
}
