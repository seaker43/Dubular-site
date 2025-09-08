import { useEffect, useState } from "react";
import Image from "next/image";

export default function Favorites() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("favorites") : "[]";
      const parsed = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch {
      setItems([]);
    }
  }, []);

  return (
    <div className="px-4 pt-6 pb-24"> {/* pb keeps clear of bottom bar */}
      <h1 className="text-xl font-bold mb-3">Your Favorites</h1>

      {items.length === 0 ? (
        <p className="text-neutral-400">No favorites yet.</p>
      ) : (
        <div
          className="no-scrollbar flex gap-3 overflow-x-auto snap-x snap-mandatory py-2"
          style={{ scrollPaddingLeft: "1rem" }}
        >
          {items.map((item, i) => {
            // Glow logic: live = red, otherwise alternate pink/blue
            const glow =
              item?.isLive ? "glow-red" : i % 2 === 0 ? "glow-pink" : "glow-blue";

            return (
              <div
                key={item.id ?? i}
                className={`thumbnail ${glow} shrink-0 snap-start aspect-square w-[40vw] sm:w-40 md:w-44`}
              >
                {/* Channel logo button */}
                <button
                  className="absolute top-2 left-2 z-10"
                  onClick={() => (window.location.href = `/channel/${item.channelId ?? ""}`)}
                  title={item.channelName ?? "Creator"}
                >
                  <Image
                    src={item.channelLogo || "/placeholder.svg"}
                    alt={item.channelName || "Creator"}
                    width={40}
                    height={40}
                    className="rounded-full border border-white/20"
                  />
                </button>

                {/* Favorite/star toggle placeholder (optional)
                <button className="favorite-btn">★</button>
                */}

                {/* Square thumbnail */}
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title || "Favorite"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 40vw, 10rem"
                />

                {/* Title strip */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-semibold line-clamp-1">
                    {item.title || "Untitled"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
