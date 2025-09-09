// components/Thumb.jsx
import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Drop-in replacement for ThumbnailCard with the same props.
 * Uses the site's global glow utilities (glow-dual / glow-cyan / glow-red).
 */
export default function Thumb({
  title,
  image,              // URL string
  href = "#",
  live = false,
  color = "pink",     // "pink" | "blue" | "red" (red wins if live)
  square = false,     // true for favorites rail
  creator,            // { name, slug, logoUrl }
  priority = false,   // eager-load to avoid flicker near viewport
}) {
  const [loaded, setLoaded] = useState(false);

  // Map to global glow utilities
  const glowClass = useMemo(() => {
    if (live) return "glow-red";
    if (color === "blue") return "glow-cyan";
    // default theme = neon pink + cyan
    return "glow-dual";
  }, [live, color]);

  // Keep same footprint as the old component so rows don’t shift
  const widthClass = square
    ? "w-[40vw] sm:w-40 md:w-44"
    : "w-[72vw] sm:w-[46vw] md:w-[34vw] lg:w-[28vw] xl:w-[22vw]";

  const ratioClass = square ? "ratio-1x1" : "ratio-16x9";
  const Wrapper = href === "#" ? "div" : Link;

  return (
    <div className={`thumb-card ${glowClass} ${widthClass} shrink-0 select-none snap-start`}>
      <div className={`thumb-ratio ${ratioClass}`}>
        {/* Channel badge */}
        {creator?.slug && (
          <Link
            href={`/creator/${creator.slug}`}
            aria-label={`${creator?.name ?? "Creator"} page`}
            className="thumb-badge"
          >
            {creator?.logoUrl ? (
              <img
                src={creator.logoUrl}
                alt={`${creator?.name ?? "Creator"} logo`}
                width="36"
                height="36"
                className="thumb-badge-img"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            ) : (
              <div className="thumb-badge-fallback">?</div>
            )}
          </Link>
        )}

        {/* Skeleton shimmer (kept to avoid reflow) */}
        <div
          className="thumb-skel"
          style={{ visibility: loaded ? "hidden" : "visible" }}
          aria-hidden="true"
        />

        {/* Media */}
        <Wrapper href={href} className="block">
          <img
            src={image || "/placeholder.svg"}
            alt={title || "Thumbnail"}
            className="thumb-media"
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

        {/* Title strip */}
        <div className="thumb-title">
          <span className="thumb-label">{title || "Untitled"}</span>
        </div>

        {/* LIVE pill */}
        {live && <span className="thumb-live">LIVE</span>}
      </div>

      <style jsx>{`
        .thumb-card {
          position: relative;
          border-radius: 0.75rem;
          outline: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 2px 10px rgba(0,0,0,0.45),
            inset 0 0 0 1px rgba(255,255,255,0.04);
          transition: transform 200ms ease;
          overflow: hidden;
          background: rgba(23,23,23,0.7);
          transform: translateZ(0);
          will-change: transform;
        }
        .thumb-card:hover { transform: translate3d(0,-2px,0); }
        .thumb-card:active { transform: translate3d(0,0,0) scale(0.98); }

        /* Aspect wrapper prevents layout shift */
        .thumb-ratio { position: relative; width: 100%; overflow: hidden; }
        .ratio-16x9 { aspect-ratio: 16 / 9; }
        .ratio-1x1  { aspect-ratio: 1 / 1; }

        /* Media (no fade to prevent fast-swipe flicker) */
        .thumb-media {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          backface-visibility: hidden;
        }

        /* Skeleton shimmer */
        .thumb-skel {
          position: absolute; inset: 0;
          background:
            linear-gradient(90deg,
              rgba(255,255,255,0.05) 0%,
              rgba(255,255,255,0.10) 50%,
              rgba(255,255,255,0.05) 100%);
          background-size: 200% 100%;
          animation: scan 1.2s linear infinite;
          pointer-events: none;
        }
        @keyframes scan {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Title strip */
        .thumb-title {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 0.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        }
        .thumb-label { font-size: 0.875rem; font-weight: 600; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.6)); }

        /* Channel badge */
        .thumb-badge {
          position: absolute; left: 0.5rem; top: 0.5rem; z-index: 2;
          border-radius: 9999px; padding: 2px;
          background: rgba(255,255,255,0.08);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);
        }
        .thumb-badge-img { border-radius: 9999px; display: block; width: 36px; height: 36px; object-fit: cover; }
        .thumb-badge-fallback {
          width: 36px; height: 36px; border-radius: 9999px;
          background: #3f3f46; color: rgba(255,255,255,0.7);
          display: grid; place-items: center; font-size: 0.75rem;
        }

        /* LIVE pill */
        .thumb-live {
          position: absolute; right: 0.5rem; top: 0.5rem;
          font-size: 10px; font-weight: 700;
          padding: 0.25rem 0.5rem; border-radius: 0.375rem;
          background: rgba(239,68,68,0.9); color: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
}
