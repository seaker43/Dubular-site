/* components/Thumb/Thumb.jsx */
export default function Thumb({
  title = "Untitled",
  image = "/placeholder.svg",
  live = false,
  glow = "dual", /* "dual" | "red" | "cyan" */
  href = "#",
  square = false,
  priority = false,
}) {
  const cardGlow =
    glow === "red" ? "glow-red" : glow === "cyan" ? "glow-cyan" : "glow-dual";
  const aspect = square ? "ratio-1x1" : "ratio-16x9";

  return (
    <a href={href} className="block shrink-0" draggable="false">
      <div className={`thumb-card ${cardGlow}`} style={{ width: "min(86vw, 360px)" }}>
        <div className={`ratio ${aspect}`}>
          <img
            src={image}
            alt={title}
            className="thumb-img"
            loading={priority ? "eager" : "lazy"}
            fetchpriority={priority ? "high" : "auto"}
            decoding="async"
            draggable="false"
            onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
          />
          {live && <span className="live-badge">LIVE</span>}
          <div className="thumb-title">{title}</div>
        </div>
      </div>
    </a>
  );
}
