// components/ThumbnailCard.jsx
import Link from "next/link";

export default function ThumbnailCard({
  href = "#",
  title = "Untitled",
  src = "/thumbnails/sample.jpg",
  live = false,
}) {
  return (
    <Link
      href={href}
      className="group block thumbnail-card thumb-glow"
      aria-label={title}
    >
      <div className="relative w-full overflow-hidden rounded-xl">
        {/* Glow layer lives behind the image */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-2xl transition duration-300 group-hover:opacity-90"
          aria-hidden
        />
        {/* 16:9 aspect ratio box */}
        <div className="pt-[56.25%]" />
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover will-change-transform transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Title + Live badge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
          <div className="flex items-center gap-2">
            {live && (
              <span className="live-badge inline-flex h-5 items-center justify-center rounded bg-red-600 px-2 text-[10px] font-bold leading-none">
                LIVE
              </span>
            )}
            <span className="thumbnail-title line-clamp-2 text-sm font-semibold text-white/95 drop-shadow">
              {title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
