// components/ThumbnailCard.jsx
import { Star } from "lucide-react";

export default function ThumbnailCard({
  title,
  image = "/placeholder.svg",
  color = "pink", // "pink" | "blue" | "red" (red shows LIVE)
  onFav,
}) {
  const glow =
    color === "red" ? "glow-red" : color === "blue" ? "glow-blue" : "glow-pink";

  return (
    <article
      className={`
        group thumbnail ${glow} snap-start relative
        flex-none
        w-[72vw] sm:w-[48vw] md:w-[36vw] lg:w-[26vw] xl:w-[20vw]
        aspect-[16/9]
        transition-transform duration-200
        hover:scale-[1.03] active:scale-95
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}
    >
      {/* Image MUST be direct child for .thumbnail img rule */}
      <img src={image} alt={title} loading="lazy" decoding="async" />

      {/* LIVE pill only for red */}
      {color === "red" && (
        <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-md bg-red-600/90 text-white shadow">
          LIVE
        </span>
      )}

      {/* Favorite */}
      <button
        aria-label="favorite"
        className="absolute top-2 right-2 grid place-items-center w-9 h-9 rounded-full bg-black/35 backdrop-blur ring-1 ring-white/15"
        onClick={(e) => {
          e.stopPropagation();
          onFav?.();
        }}
      >
        <Star className="w-5 h-5 text-white/90" />
      </button>

      {/* Bottom title gradient */}
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <h3 className="text-white font-semibold drop-shadow line-clamp-2">{title}</h3>
      </div>
    </article>
  );
}
