// pages/favorites.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@components/Layout";
import ThumbnailCard from "@components/ThumbnailCard";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("favorites");
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            setFavorites(parsed);
          }
        }
      } catch (err) {
        console.error("Error loading favorites:", err);
      }
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>dubUlar • Favorites</title>
      </Head>

      <main className="px-4 pb-24">
        <h1 className="text-2xl font-extrabold mb-4">Your Favorites</h1>

        {favorites.length === 0 ? (
          <p className="text-neutral-400">You haven’t added any favorites yet.</p>
        ) : (
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex space-x-4">
              {favorites.map((fav, idx) => (
                <ThumbnailCard
                  key={`${fav.slug}-${idx}`}
                  item={{
                    ...fav,
                    img: fav.channelLogo || fav.img || "/placeholder.svg",
                    title: fav.title || "Creator",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
