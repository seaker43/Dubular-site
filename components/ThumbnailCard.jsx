// components/ThumbnailCard.jsx
import Link from "next/link";

export default function ThumbnailCard({
  file = "/thumbnails/placeholder.jpg",
  title = "Untitled",
  href = "#",
  live = false,
}) {
  return (
    <Link
      href={href}
      className="thumb-glow block group w-[56vw] sm:w-64 md:w-72 lg:w-80"
      prefetch={false}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-900">
        {/* image */}
        <img
          src={file}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover will-change-transform [transform:translateZ(0)]"
          onError={(e) => { e.currentTarget.src = "/thumbnails/placeholder.jpg"; }}
        />

        {/* live badge (optional) */}
        {live && (
          <span className="absolute left-2 top-2 rounded bg-red-600 px-2 py-0.5 text-xs font-bold text-white shadow">
            LIVE
          </span>
        )}

        {/* bottom title strip */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <p className="line-clamp-1 text-sm font-semibold text-white drop-shadow">
            {title}
          </p>
        </div>

        {/* hover lift */}
        <div className="pointer-events-none absolute inset-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
