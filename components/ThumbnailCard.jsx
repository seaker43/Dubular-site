// components/ThumbnailCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function ThumbnailCard({ title, category, tags = [], thumb, live = false }) {
  return (
    <Link
      href="#"
      className="
        group relative overflow-hidden rounded-2xl
        bg-neutral-950 border border-neutral-800
        hover:border-[var(--neon)]/50 transition
        shadow-[0_0_0_0_rgba(0,0,0,0)]
        hover:shadow-[0_0_24px_0_var(--neon-soft)]
        w-72 md:w-80   /* bigger cards */
      "
    >
      {/* Thumb: strict 16:9 */}
      <div className="relative w-full aspect-video">
        <Image
          src={thumb || "/thumbs/placeholder.jpg"}
          alt={title || "Untitled"}
          fill
          sizes="(max-width:768px) 70vw, (max-width:1200px) 30vw, 25vw"
          className="object-cover"
          priority={live}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0" />
        {live && (
          <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1 rounded-full
                           bg-[var(--neon)] text-black shadow-[0_0_12px_var(--neon)]">
            LIVE
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="p-3">
        <h3 className="text-lg font-extrabold text-neutral-100 truncate">
          {title || "Untitled"}
        </h3>
        <p className="mt-1 text-sm text-neutral-400">
          {(category || "genre").toLowerCase()} {tags.length ? "• " + tags[0] : ""}
        </p>
      </div>
    </Link>
  );
}
