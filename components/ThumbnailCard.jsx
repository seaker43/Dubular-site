// components/ThumbnailCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function ThumbnailCard({
  title,
  image,
  href = "#",
  live = false,
  color = "pink", // "pink" | "blue" | "red" (red is forced if live)
  square = false, // true for favorites rail
  creator,        // { name, slug, logoUrl }
}) {
  const glow = live ? "glow-red" : color === "blue" ? "glow-blue" : "glow-pink";
  const Wrapper = href === "#" ? "div" : Link;

  // Sizing: square cards use aspect-square helper; others use 16:9 aspect-video helper
  const sizeClass = square
    ? "aspect-square w-[40vw] sm:w-40 md:w-44"
    : "aspect-video w-[72vw] sm:w-[46vw] md:w-[34vw] lg:w-[28vw] xl:w-[22vw]";

  return (
    <div className={`thumbnail ${glow} relative shrink-0 ${sizeClass} select-none`}>
      {/* Channel badge */}
      {creator?.slug && (
        <Link
          href={`/creator/${creator.slug}`}
          aria-label={`${creator.name} page`}
          className="channel-badge"
        >
          {creator?.logoUrl ? (
            <Image
              src={creator.logoUrl}
              alt={`${creator.name} logo`}
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-neutral-700 grid place-items-center text-xs text-white/70">
              ?
            </div>
          )}
        </Link>
      )}

      {/* Media */}
      <Wrapper href={href} className="block">
        <Image
          src={image || "/placeholder.svg"}
          alt={title || "Thumbnail"}
          fill
          sizes="(max-width:640px) 72vw, (max-width:1024px) 46vw, 28vw"
          className="object-cover"
          priority={false}
        />
      </Wrapper>

      {/* Title strip */}
      <div className="thumb-title">
        <span className="drop-shadow-sm">{title || "Untitled"}</span>
      </div>

      {live && (
        <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-md bg-red-500/90 text-white shadow">
          LIVE
        </span>
      )}
    </div>
  );
}
