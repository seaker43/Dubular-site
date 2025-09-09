// components/Thumb.jsx
import Link from "next/link";
import { useState, useMemo } from "react";

/**
 * Thumb – Single reusable thumbnail card used everywhere.
 * - Edge-to-edge rows handled by CSS (.thumb-row.full-bleed).
 * - Images default to object-contain (no cropping). Set fit="cover" if you need.
 * - live=true forces red glow; otherwise "dual" (pink+cyan).
 */
export default function Thumb({
  id,
  title = "Untitled",
  img = "/placeholder.svg",
  href = "#",
  live = false,
  fit = "contain", // "contain" (no cropping) | "cover" (crop)
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);

  const glowClass = useMemo(
    () => (live ? "glow-red" : "glow-dual"),
    [live]
  );

  const Wrapper = href === "#" ? "div" : Link;

  return (
    <article
      className={`thumb-card ${glowClass} shrink-0 select-none snap-start`}
      role="listitem"
      data-id={id}
    >
      <div className="ratio ratio-16x9">
        {/* lightweight skeleton that doesn’t reflow on load */}
        <div
          className="skeleton"
          style={{ visibility: loaded ? "hidden" : "visible" }}
          aria-hidden="true"
        />
        <Wrapper href={href} aria-label={title}>
          <img
            src={img}
            alt={title}
            className={`thumb-img ${fit === "cover" ? "thumb-cover" : "thumb-contain"}`}
            loading={priority ? "eager" : "lazy"}
            fetchpriority={priority ? "high" : "auto"}
            decoding="async"
            draggable="false"
            onLoad={() => setLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
              setLoaded(true);
            }}
          />
        </Wrapper>

        {live && <span className="live-badge">LIVE</span>}
        {!!title && <div className="thumb-title">{title}</div>}
      </div>

      <style jsx>{`
        .ratio { position: relative; width: 100%; overflow: hidden; }
        .ratio-16x9 { aspect-ratio: 16 / 9; }

        .skeleton {
          position: absolute; inset: 0;
          background: linear-gradient(90deg,
            rgba(255,255,255,.06) 0%,
            rgba(255,255,255,.12) 50%,
            rgba(255,255,255,.06) 100%);
          background-size: 200% 100%;
          animation: scan 1.2s linear infinite;
          pointer-events: none;
        }
        @keyframes scan {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </article>
  );
}
