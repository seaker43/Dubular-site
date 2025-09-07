// components/ThumbnailCard.jsx
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * ThumbnailCard
 * - Prevents "broken image" flicker by hiding the <Image> until loaded
 * - Replaces failed images with a soft neon fallback (no broken-art icon)
 * - Keeps a stable 16:9 box with a skeleton while loading
 *
 * Props:
 *  - src: string                 // preferred image path (e.g. "/thumbnails/foo.jpg")
 *  - href?: string               // click target
 *  - title?: string              // label
 *  - live?: boolean              // show LIVE badge
 *  - className?: string          // extra classes
 */
export default function ThumbnailCard({
  src,
  href = "#",
  title = "",
  live = false,
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Data-URI fallback (simple dark 16:9 with neon border glow)
  const fallbackDataUri = useMemo(() => {
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90' preserveAspectRatio='none'>
        <defs>
          <radialGradient id='g' cx='50%' cy='85%' r='70%'>
            <stop offset='0%' stop-color='rgba(0,255,170,0.35)'/>
            <stop offset='55%' stop-color='rgba(0,255,170,0.12)'/>
            <stop offset='100%' stop-color='rgba(0,0,0,0)'/>
          </radialGradient>
        </defs>
        <rect width='160' height='90' fill='#0a0a0a'/>
        <rect x='6' y='3' width='148' height='84' rx='8' ry='8' fill='none' stroke='rgba(0,255,170,0.6)' stroke-width='2'/>
        <rect width='160' height='90' fill='url(#g)'/>
      </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }, []);

  const showImage = Boolean(src) && !failed;

  return (
    <Link
      href={href}
      className={`block thumb-glow ${className}`}
      aria-label={title || "Open"}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
        {/* Skeleton keeps layout stable and hides any broken icon while loading */}
        {!loaded && !failed && (
          <div className="absolute inset-0 skeleton-thumb rounded-xl" />
        )}

        {/* Fallback (no broken icon) */}
        {failed && (
          <Image
            src={fallbackDataUri}
            alt={title || "thumbnail"}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
            className="object-cover"
            priority={false}
          />
        )}

        {/* Real image, only shown after it finishes loading */}
        {showImage && (
          <Image
            src={src}
            alt={title || "thumbnail"}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
            className={`object-cover transition-opacity duration-200 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => {
              setFailed(true);
              setLoaded(true);
            }}
          />
        )}

        {/* Title overlay */}
        {title ? (
          <div className="absolute bottom-0 left-0 w-full px-2 py-1 text-sm text-white bg-black/60">
            {title}
          </div>
        ) : null}

        {/* LIVE badge */}
        {live ? (
          <span className="live-badge select-none">LIVE</span>
        ) : null}
      </div>
    </Link>
  );
}
