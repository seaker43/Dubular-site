// components/Thumb.jsx
import Link from "next/link";
import Image from "next/image";

export default function Thumb({
  title,
  image,             // URL string
  href = "#",
  live = false,
  color = "dual",    // "dual" | "cyan" | "red"
  creator,           // { name, slug, logoUrl }
  className = "",
  priority = false,
}) {
  // Glow mapping → matches globals.css
  const glowClass = live
    ? "glow-red"
    : color === "cyan"
    ? "glow-cyan"
    : "glow-dual";

  const CardInner = (
    <article
      className={`thumb-card ${glowClass} ${className}`.trim()}
      role="listitem"
    >
      {/* Creator badge */}
      {creator?.slug && (
        <Link
          href={`/creator/${creator.slug}`}
          aria-label={`${creator?.name ?? "Creator"} page`}
          className="absolute top-2 left-2 z-10 rounded-full bg-black/70 p-1 ring-1 ring-white/20"
        >
          {creator?.logoUrl ? (
            <Image
              src={creator.logoUrl}
              alt={`${creator?.name ?? "Creator"} logo`}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white/70">
              ?
            </div>
          )}
        </Link>
      )}

      {/* Thumbnail image */}
      <Image
        src={image || "/placeholder.svg"}
        alt={title || "Thumbnail"}
        className="thumb-img"
        width={640}
        height={360}
        priority={priority}
        quality={85}
        draggable={false}
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
      />

      {/* LIVE badge */}
      {live && <span className="live-badge">LIVE</span>}

      {/* Title */}
      {title && <div className="thumb-title">{title}</div>}
    </article>
  );

  // Wrap in link only when href is valid
  return href && href !== "#"
    ? (
      <Link href={href} aria-label={title || "Open"}>
        {CardInner}
      </Link>
    )
    : CardInner;
}
