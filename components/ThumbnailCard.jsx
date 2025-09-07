import Link from "next/link";

export default function ThumbnailCard({ item }) {
  const {
    id,
    title = "Untitled",
    live = false,
    thumb = "/thumbs/placeholder.jpg",
    href = "#",
  } = item || {};

  return (
    <Link
      href={href}
      className="group block rounded-xl overflow-hidden bg-black/40 ring-1 ring-white/5 hover:ring-neon/40 transition shadow-[0_0_20px_-8px_var(--neon)]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] bg-zinc-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Bottom info bar */}
      <div className="p-2 flex items-center justify-between">
        <p className="truncate text-sm font-medium text-neon glow-sm">{title}</p>
        {live && (
          <span className="ml-2 shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-neon/15 text-neon ring-1 ring-neon/40 glow-xs">
            LIVE
          </span>
        )}
      </div>
    </Link>
  );
}
