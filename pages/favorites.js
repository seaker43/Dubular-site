// pages/favorites.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@components/Layout";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("favorites");
        if (raw) setFavorites(JSON.parse(raw));
      } catch (err) {
        console.error("Failed to parse favorites:", err);
      }
    }
  }, []);

  return (
    <div className="has-favs">
      <Layout>
        <Head>
          <title>dubUlar • Favorites</title>
        </Head>

        <main className="px-4">
          <h1 className="text-2xl font-extrabold mb-4">Favorites</h1>

          {favorites.length === 0 ? (
            <p className="text-neutral-400">You haven’t added any favorites yet.</p>
          ) : (
            <div className="favs-strip">
              <div className="favs-row">
                {favorites.map((fav, idx) => (
                  <a
                    key={`${fav.slug}-${idx}`}
                    href={`/creator/${fav.slug || fav.id || idx}`}
                    className="fav-thumb glow-dual"
                  >
                    {/* Channel logo if available, else fallback */}
                    <img
                      src={fav.channelLogo || fav.img || "/placeholder.svg"}
                      alt={fav.title || "Favorite"}
                      className="w-full h-full object-cover"
                      draggable="false"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    {/* Overlay title */}
                    <div className="absolute inset-x-0 bottom-1 text-center text-xs font-semibold text-white drop-shadow">
                      {fav.title || "Creator"}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </main>
      </Layout>
    </div>
  );
}
