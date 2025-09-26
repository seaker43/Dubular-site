"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Fav = { img: string; title: string };

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Fav[]>([]);
  useEffect(() => {
    try { const f = JSON.parse(localStorage.getItem("favorites") || "[]"); setFavorites(Array.isArray(f) ? f : []); }
    catch { setFavorites([]); }
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 text-center">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-neutral-400 text-center">You haven’t added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {favorites.map((item, i) => (
            <article key={i} className="group relative bg-neutral-900 rounded-2xl shadow-lg shadow-black/40 ring-1 ring-white/10 overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[5/7]">
                <Image src={item.img} alt={item.title || "Favorite"} fill className="object-cover" sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 20vw" />
                <div className="absolute inset-2 rounded-xl ring-1 ring-white/15 pointer-events-none" />
              </div>
              <div className="p-3 bg-neutral-950/80">
                <p className="text-sm font-semibold text-cyan-300 text-center truncate">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
