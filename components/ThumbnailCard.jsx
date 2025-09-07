// components/ThumbnailCard.jsx
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function ThumbnailCard({ id, title, image, live = false }) {
  const FALLBACK = "/placeholder.svg";

  const [fav, setFav] = useState(false);
  const [src, setSrc] = useState(image || FALLBACK);
  const [loaded, setLoaded] = useState(false);

  // hydrate favorite state
  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFav(list.some((x) => x.id === id));
    } catch {
      setFav(false);
    }
  }, [id]);

  const toggleFavorite = () => {
    try {
      const list = JSON.parse(localStorage.getItem("favorites") || "[]");
      const exists = list.some((x) => x.id === id);
      const updated = exists
        ? list.filter((x) => x.id !== id)
        : [...list, { id, title, image: src }];

      localStorage.setItem("favorites", JSON.stringify(updated));
      setFav(!exists);
    } catch {}
  };

  return (
    <div className="group">
      {/* Card */}
      <div
        className="
          relative overflow-hidden rounded-xl
          ring-1 ring-white/5
          bg-neutral-900/60
          shadow-[0_0_60px_-18px_rgba(16,185,129,0.35)]
          transition-transform duration-200
          hover:scale-[1.02]
        "
      >
        {/* Media area */}
        <div className="relative w-full aspect-video">
          {/* shimmer while loading */}
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-neutral-900/60" />
          )}

          <Image
            src={src || FALLBACK}
            alt={title || "Thumbnail"}
            fill
            sizes="(max-width:768px) 60vw, (max-width:1024px) 30vw, 20vw"
            className="object-cover"
            priority={false}
            onLoadingComplete={() => setLoaded(true)}
            onError={() => {
              if (src !== FALLBACK) setSrc(FALLBACK);
              setLoaded(true);
            }}
          />

          {/* neon top edge */}
          <div className="pointer-events-none absolute -top-px left-0 right-0 h-[6px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0 blur-[2px]" />

          {/* LIVE badge */}
          {live && (
            <span className="live-badge">LIVE</span>
          )}

          {/* star button */}
          <button
            onClick={toggleFavorite}
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            className={`
              absolute top-2 right-2 inline-flex items-center justify-center
              h-8 w-8 rounded-full
              transition
              ${fav ? "bg-yellow-400 text-black" : "bg-neutral-900/70 text-white"}
              ring-1 ring-white/10
              group-active:scale-95
            `}
          >
            <Star
              size={18}
              strokeWidth={2}
              className="pointer-events-none"
              // fill when favored
              {...(fav ? { fill: "currentColor" } : {})}
            />
          </button>

          {/* subtle bottom gradient for legibility on hover */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Title under card */}
      <div className="card-title truncate mt-1">{title}</div>
    </div>
  );
}
