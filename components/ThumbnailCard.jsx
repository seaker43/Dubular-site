import Image from "next/image";
import Link from "next/link";

export default function ThumbnailCard({
  href = "#",
  title = "Untitled",
  image,
  tags = [],
  live = false,
  width = 640,
  height = 360
}) {
  return (
    <Link href={href} className="block">
      <div className="thumb aspect-video bg-black">
        {image ? (
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" priority className="object-cover" />
        ) : (
          <div className="w-full h-full bg-neutral-900" />
        )}

        {/* bottom overlay with title + tags */}
        <div className="overlay">
          <div className="text-[color:var(--neon)] text-base font-semibold leading-tight drop-shadow-[0_0_10px_rgba(54,242,185,.5)]">
            {title}
          </div>
          {tags?.length > 0 && (
            <div className="mt-1 text-sm text-white/70">{tags.join(" • ")}</div>
          )}
        </div>

        {live && <span className="badge-live">LIVE</span>}
      </div>
    </Link>
  );
}
