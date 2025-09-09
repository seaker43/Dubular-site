import Image from "next/image";
import { useState, useEffect } from "react";

export default function Thumb({ src, alt, id, isLive = false }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = () => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((f) => f !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div
      className={`
        relative rounded-xl overflow-hidden transition-transform duration-300
        hover:scale-105
        ${isLive ? "glow-live" : "glow-dual"}
      `}
    >
      {/* Thumbnail image */}
      <Image
        src={src}
        alt={alt}
        width={320}
        height={180}
        className="object-cover w-full h-auto"
      />

      {/* LIVE badge */}
      {isLive && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          LIVE
        </span>
      )}

      {/* Favorite button */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 text-xl text-white drop-shadow-md"
      >
        {favorites.includes(id) ? "★" : "☆"}
      </button>
    </div>
  );
}
