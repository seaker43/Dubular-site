// components/ThumbnailCard.jsx
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function ThumbnailCard({ id, title, image, live = false }) {
  const FALLBACK = "/placeholder.svg";
  const [fav, setFav] = useState(false);
  const [src, setSrc] = useState(image || FALLBACK);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFav(list.some((x) => x.id === id));
    } catch {}
  }, [id]);

  const toggleFavorite = () => {
    try {
      const list = JSON.parse(localStorage.getItem("favorites") || "[]");
      const exists = list.some((x) => x.id === id);
      const updated = exists ? list.filter((x) => x.id !== id) : [...list, { id, title, image: src }];
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFav(!exists);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new StorageEvent("storage", { key: "favorites", newValue: JSON.stringify(updated) }));
      }
    } catch {}
  };

  return (
    <div className="group">
      <div
        className="
          relative overflow-hidden rounded-xl
          ring-1 ring-green-500/30 bg-neutral-900/60
          shadow-[0_0_25px_3px_rgba(0,255,0,0.4)]
          transition-transform duration-200
          hover:scale-[1.03] hover:shadow-[0_0_35px_6px_rgba(0,255,0,0.6)]
        "
      >
        <div className="relative w-full aspect-video">
          {!loaded && <div className="absolute inset-0 animate-pulse bg-neutral-900/60" />}

          <Image
            src={src || FALLBACK}
            alt={title || "Thumbnail"}
            fill
            sizes="(max-width:768px) 60vw, (max-width:1024px) 30vw, 20vw"
            className="object-cover"
            onLoadingComplete={() => setLoaded(true)}
            onError={() => { if (src !== FALLBACK) setSrc(FALLBACK); setLoaded(true); }}
          />

          {live && <span className="live-badge">LIVE</span>}

          <button
            onClick={toggleFavorite}
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            className={`absolute top-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full ring-1 ring-white/10 transition ${fav ? "bg-yellow-400 text-black" : "bg-neutral-900/70 text-white"} active:scale-95`}
          >
            <Star size={18} strokeWidth={2} {...(fav ? { fill: "currentColor" } : {})} />
          </button>
        </div>
      </div>
      <div className="card-title truncate mt-1">{title}</div>
    </div>
  );
}
