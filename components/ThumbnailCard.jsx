import Link from "next/link";

/**
 * Simple, flicker-safe thumbnail card (16:9).
 * Uses <img> to avoid next/image decode flicker on static export + mobile.
 */
export default function ThumbnailCard({
  href = "#",
  src = "/thumbnails/trending/trending1.jpg",
  title = "Untitled",
  tags = [],
  live = false,
}) {
  return (
    <Link href={href} className="block w-[78vw] sm:w-[48vw] md:w-[36vw] lg:w-[28vw] xl:w-[22vw] max-w-[480px]">
      <div
        className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-[0_0_40px_-18px_rgba(57,255,20,.35)]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <img
          src={src}
          alt={title}
          decoding="async"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
        {live && (
          <span className="absolute right-2 top-2 rounded-full bg-[rgba(57,255,20,1)] px-3 py-1 text-xs font-black text-black shadow-[0_0_24px_rgba(57,255,20,.7)]">
            LIVE
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="mt-2">
        <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
        {tags?.length > 0 && (
          <p className="text-white/70 text-sm">{tags.join(" • ")}</p>
        )}
      </div>
    </Link>
  );
}
