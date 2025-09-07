import Link from "next/link";

export default function ThumbnailCard({
  category = "trending",
  file = "trending1.jpg",
  title = "Untitled",
  tags = [],
  href = "#",
  live = false,
}) {
  const src = `/thumbnails/${category}/${file}`;
  return (
    <Link href={href} className="block group select-none">
      <div className="relative aspect-video w-[78vw] sm:w-[22rem] md:w-[24rem] rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_0_30px_-12px_rgba(57,255,20,.35)] ring-1 ring-white/5">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* gradient floor */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
        {/* title */}
        <div className="absolute left-3 right-3 bottom-2 flex items-center justify-between gap-2">
          <span className="text-white font-semibold drop-shadow-sm">
            {title}
          </span>
          {live && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#39ff14] text-black shadow-[0_0_24px_#39ff14]">
              LIVE
            </span>
          )}
        </div>
      </div>
      {tags?.length > 0 && (
        <div className="mt-2 text-xs text-white/70">
          {tags.join(" • ")}
        </div>
      )}
    </Link>
  );
}
