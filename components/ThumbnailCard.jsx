// components/ThumbnailCard.jsx
import Link from "next/link";
import { useState, useMemo } from "react";

export default function ThumbnailCard({
  title,
  image,             // URL string
  href = "#",
  live = false,
  color = "pink",     // "pink" | "blue" | "red" (red wins if live)
  square = false,     // true for favorites rail
  creator,            // { name, slug, logoUrl }
  priority = false,   // when true, eager-load to avoid flicker near viewport
}) {
  const [loaded, setLoaded] = useState(false);

  const glowClass = useMemo(() => {
    if (live) return "glow-red";
    return color === "blue" ? "glow-blue" : "glow-pink";
  }, [live, color]);

  // Width presets per breakpoint (keeps snap uniform)
  const widthClass = square
    ? "w-[40vw] sm:w-40 md:w-44"
    : "w-[72vw] sm:w-[46vw] md:w-[34vw] lg:w-[28vw] xl:w-[22vw]";

  // Aspect ratio wrapper prevents layout shift; required for perfect scrolling
  const ratioClass = square ? "ratio-1x1" : "ratio-16x9";

  const Wrapper = href === "#" ? "div" : Link;

  return (
    <div className={`card ${glowClass} ${widthClass} shrink-0 select-none snap-start`}>
      <div className={`ratio ${ratioClass}`}>
        {/* Channel badge */}
        {creator?.slug && (
          <Link
            href={`/creator/${creator.slug}`}
            aria-label={`${creator?.name ?? "Creator"} page`}
            className="badge"
          >
            {creator?.logoUrl ? (
              <img
                src={creator.logoUrl}
                alt={`${creator?.name ?? "Creator"} logo`}
                width="36"
                height="36"
                className="badge-img"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            ) : (
              <div className="badge-fallback">?</div>
            )}
          </Link>
        )}

        {/* Skeleton (kept in DOM; we just hide it after load to prevent reflow) */}
        <div
          className="skeleton"
          style={{ visibility: loaded ? "hidden" : "visible" }}
          aria-hidden="true"
        />

        {/* Media */}
        <Wrapper href={href} className="block">
          <img
            src={image || "/placeholder.svg"}
            alt={title || "Thumbnail"}
            className="media"
            loading={priority ? "eager" : "lazy"}
            // browsers that support fetchpriority use it; others ignore
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
        <div className="title">
          <span className="label">{title || "Untitled"}</span>
        </div>

        {/* LIVE pill */}
        {live && <span className="live">LIVE</span>}
      </div>

      <style jsx>{`
        .card {
          position: relative;
          border-radius: 0.75rem;
          outline: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 2px 10px rgba(0,0,0,0.45),
            inset 0 0 0 1px rgba(255,255,255,0.04);
          transition: transform 200ms ease;
          overflow: hidden;
          background: rgba(23,23,23,0.7);
          transform: translateZ(0); /* GPU promote */
          will-change: transform;
        }
        .card:hover { transform: translate3d(0,-2px,0); }
        .card:active { transform: translate3d(0,0,0) scale(0.98); }

        /* Glows (soft, keeps separation) */
        .glow-pink {
          box-shadow:
            0 2px 10px rgba(0,0,0,0.45),
            inset 0 0 0 1px rgba(255,255,255,0.04),
            0 0 10px rgba(236,72,153,0.35),
            0 0 24px rgba(236,72,153,0.25);
        }
        .glow-blue {
          box-shadow:
            0 2px 10px rgba(0,0,0,0.45),
            inset 0 0 0 1px rgba(255,255,255,0.04),
            0 0 10px rgba(59,130,246,0.35),
            0 0 24px rgba(59,130,246,0.25);
        }
        .glow-red {
          box-shadow:
            0 2px 10px rgba(0,0,0,0.45),
            inset 0 0 0 1px rgba(255,255,255,0.04),
            0 0 10px rgba(239,68,68,0.45),
            0 0 24px rgba(239,68,68,0.35);
        }

        /* Ratio wrapper */
        .ratio { position: relative; width: 100%; overflow: hidden; }
        .ratio-16x9 { aspect-ratio: 16 / 9; }
        .ratio-1x1  { aspect-ratio: 1 / 1; }

        /* Media — NO opacity transitions (prevents flicker on fast swipe) */
        .media {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          backface-visibility: hidden;
        }

        /* Skeleton shimmer */
        .skeleton {
          position: absolute; inset: 0;
          background:
            linear-gradient(90deg,
              rgba(255,255,255,0.05) 0%,
              rgba(255,255,255,0.10) 50%,
              rgba(255,255,255,0.05) 100%);
          background-size: 200% 100%;
          animation: scan 1.2s linear infinite;
          will-change: background-position;
          pointer-events: none;
        }
        @keyframes scan {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Title strip */
        .title {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 0.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        }
        .label { font-size: 0.875rem; font-weight: 600; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.6)); }

        /* Channel badge */
        .badge {
          position: absolute; left: 0.5rem; top: 0.5rem; z-index: 2;
          border-radius: 9999px; padding: 2px;
          background: rgba(255,255,255,0.08);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);
        }
        .badge-img { border-radius: 9999px; display: block; width: 36px; height: 36px; object-fit: cover; }
        .badge-fallback {
          width: 36px; height: 36px; border-radius: 9999px;
          background: #3f3f46; color: rgba(255,255,255,0.7);
          display: grid; place-items: center; font-size: 0.75rem;
        }

        /* LIVE pill */
        .live {
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
