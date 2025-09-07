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
    <div className="px-4 pb-24 pt-6"> {/* bottom padding for BottomBar */}
      <h1 className="text-2xl font-bold mb-3">Your Favorites</h1>

      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <ul
          className="
            grid gap-3
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {items.map((it) => (
            <li key={it.id} className="thumbnail">
              <div className="relative w-full aspect-video">
                <Image
                  src={it.image || "/placeholder.webp"}
                  alt={it.title || "Favorite"}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 16vw"
                />
              </div>
              <div className="card-title truncate">{it.title || "Untitled"}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-16 flex flex-col items-center text-center">
      <div className="rounded-2xl border border-neutral-800/70 p-6 max-w-sm">
        <h2 className="text-lg font-semibold mb-1">No favorites yet</h2>
        <p className="text-neutral-400 text-sm">
          Tap the <span className="text-white font-medium">★</span> icon on any title to save it here.
        </p>
      </div>
    </div>
  );
}
