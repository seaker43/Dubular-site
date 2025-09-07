// components/ThumbnailCard.jsx
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ThumbnailCard({ id, title, image }) {
  const [fav, setFav] = useState(false);
  const [src, setSrc] = useState(image);
  const FALLBACK = "/placeholder.svg";

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFav(list.some((x) => x.id === id));
  }, [id]);

  const toggleFavorite = () => {
    const list = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updated;

    if (fav) {
      updated = list.filter((x) => x.id !== id);
    } else {
      updated = [...list, { id, title, image }];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setFav(!fav);
  };

  return (
    <div className="thumbnail relative">
      <div className="relative w-full aspect-video">
        <Image
          src={src || FALLBACK}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 16vw"
          onError={() => setSrc(FALLBACK)}
        />
      </div>

      {/* Favorite Star */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 right-2 text-lg p-1 rounded-full transition 
          ${fav ? "bg-yellow-400 text-black" : "bg-neutral-800/70 text-white"}`}
        title={fav ? "Remove from Favorites" : "Add to Favorites"}
      >
        ★
      </button>

      <div className="card-title truncate mt-1">{title}</div>
    </div>
  );
}
