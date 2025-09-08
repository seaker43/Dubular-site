// pages/favorites.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function EmptyState() {
  return (
    <div className="px-4 pt-8 pb-24 text-center text-neutral-400">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-neutral-800/60 mb-4">
        <span className="text-2xl">★</span>
      </div>
      <h2 className="text-xl font-semibold text-white">No favorites yet</h2>
      <p className="mt-1">Tap the star on any thumbnail to add it here.</p>
    </div>
  );
}

function ChannelBadge({ creator }) {
  const logoUrl = creator?.logoUrl; // CDN URL expected
  const slug = creator?.slug || "#";
  const name = creator?.name || "Creator";

  const href = slug === "#" ? "#" : `/creator/${slug}`;

  return (
    <Link
      href={href}
      className="absolute left-2 top-2 z-10 group"
      title={`Go to ${name}`}
      aria-label={`Go to ${name}'s page`}
      onClick={(e) => {
        if (slug === "#") e.preventDefault();
      }}
    >
      <div className="rounded-full p-[2px] bg-white/10 ring-1 ring-white/20 group-hover:ring-white/40 transition">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt={`${name} logo`}
            width={36}
            height={36}
            className="rounded-full object-cover"
            priority={false}
          />
        ) : (
          <div className="h-9 w-9 rounded-full bg-neutral-700 grid place-items-center text-xs text-white/70">
            ?
          </div>
        )}
      </div>
    </Link>
  );
}

function FavoriteCard({ item }) {
  const { title, thumb, href, live } = item || {};
  // choose your brand glow classes here
  const cardGlow = live ? "thumbnail glow-red" : "thumbnail glow-pink";

  const media = thumb?.startsWith("http") ? (
    <img
      src={thumb}
      alt={title || "Favorite"}
      className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover rounded-xl"
      loading="lazy"
      decoding="async"
    />
  ) : (
    <Image
      src={thumb || "/placeholder.svg"}
      alt={title || "Favorite"}
      width={1280}
      height={720}
      className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover rounded-xl"
      priority={false}
    />
  );

  return (
    <div className={`${cardGlow} relative`}>
      {item?.creator && <ChannelBadge creator={item.creator} />}

      <Link
        href={href || "#"}
        className="block focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded-xl"
        onClick={(e) => {
          if (!href) e.preventDefault();
        }}
      >
        {media}
      </Link>

      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
        <div className="text-white font-semibold drop-shadow-sm">
          {title || "Untitled"}
        </div>
      </div>
    </div>
  );
}

export default function Favorites() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined"
        ? window.localStorage.getItem("favorites")
        : null;
      const parsed = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch {
      setItems([]);
    }
  }, []);

  if (!items || items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="px-4 pb-28 pt-6">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      <ul
        className="
          grid gap-4
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {items.map((item) => (
          <li key={item?.id || item?.href || Math.random()}>
            <FavoriteCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
