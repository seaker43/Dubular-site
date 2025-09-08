// components/ThumbnailCard.jsx
import Link from "next/link";
import { useState } from "react";

export default function ThumbnailCard({
  title,
  image,            // URL string
  href = "#",
  live = false,
  color = "pink",    // "pink" | "blue" | "red" (red wins if live)
  square = false,    // true for favorites rail
  creator,           // { name, slug, logoUrl }
}) {
  const [loaded, setLoaded] = useState(false);
  const glow = live ? "glow-red" : color === "blue" ? "glow-blue" : "glow-pink";
  const Wrapper = href === "#" ? "div" : Link;

  // Fixed ratio wrapper prevents layout shift/jitter.
  // Square for favorites, 16:9 for normal rows.
  const ratioClass = square ? "thumb-ratio thumb-square" : "thumb-ratio thumb-169";

  return (
    <div className={`thumbnail ${glow} relative shrink-0 select-none`}>
      {/* Ratio box holds the height; everything sits inside */}
      <div className={ratioClass}>
        {/* Channel badge */}
        {creator?.slug && (
          <Link
            href={`/creator/${creator.slug}`}
            aria-label={`${creator.name ?? "Creator"} page`}
            className="channel-badge"
          >
            {creator?.logoUrl ? (
              <img
                src={creator.logoUrl}
                alt={`${creator.name ?? "Creator"} logo`}
                width="36"
                height="36"
                className="rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="h-9 w-9 rounded-full bg-neutral-700 grid place-items-center text-xs text-white/70">?</div>
            )}
          </Link>
        )}

        {/* Shimmer while loading */}
        {!loaded && <div className="thumb-skeleton" />}

        {/* Actual media */}
        <Wrapper href={href} className="block">
          <img
            src={image || "/placeholder.svg"}
            alt={title || "Thumbnail"}
            className={`thumb-media ${loaded ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
              setLoaded(true);
            }}
          />
        </Wrapper>

        {/* Title strip */}
        <div className="thumb-title">
          <span className="drop-shadow-sm">{title || "Untitled"}</span>
        </div>

        {/* LIVE pill */}
        {live && (
          <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-md bg-red-500/90 text-white shadow">
            LIVE
          </span>
        )}
      </div>
    </div>
  );
}
