// components/Thumb.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ThumbProps = {
  id: string | number;
  title: string;
  imageUrl: string;
  live?: boolean;
  href?: string; // internal routes like "/watch/123" preferred
  className?: string;
};

export default function Thumb({
  id,
  title,
  imageUrl,
  live = false,
  href,
  className = "",
}: ThumbProps) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites");
      const arr = raw ? (JSON.parse(raw) as Array<string | number>) : [];
      setFav(arr.includes(id));
    } catch {
      // no-op
    }
  }, [id]);

  const toggleFav = () => {
    try {
      const raw = localStorage.getItem("favorites");
      let arr = raw ? (JSON.parse(raw) as Array<string | number>) : [];
      if (arr.includes(id)) arr = arr.filter((x) => x !== id);
      else arr.push(id);
      localStorage.setItem("favorites", JSON.stringify(arr));
      setFav((f) => !f);
    } catch {
      // no-op
    }
  };

  const Card = (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-neutral-800",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_8px_rgba(0,255,120,0.15)]",
        className,
      ].join(" ")}
    >
      {/* LIVE badge */}
      {live && (
        <span className="absolute left-2 top-2 z-10 rounded-md bg-red-600 px-2 py-0.5 text-xs font-semibold tracking-wide text-white">
          LIVE
        </span>
      )}

      {/* Favorite toggle */}
      <button
        onClick={(e) => {
          e.preventDefault(); // keep card click (href) from firing
          toggleFav();
        }}
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        className="absolute right-2 top-2 z-10 rounded-md bg-black/50 px-2 py-1 text-sm text-white backdrop-blur transition-opacity hover:bg-black/70"
      >
        {fav ? "★" : "☆"}
      </button>

      {/* 16:9 media */}
      <div className="relative aspect-video w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={false}
        />
      </div>

      {/* Title */}
      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-cyan-300">{title}</h3>
      </div>

      {/* Subtle neon ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-green-400/20 transition-[box-shadow] group-hover:ring-1" />
    </div>
  );

  if (href) {
    // Prefer Next.js routing for internal links
    const isInternal = href.startsWith("/");
    return isInternal ? (
      <Link href={href} className="block no-underline">
        {Card}
      </Link>
    ) : (
      <a href={href} className="block no-underline" rel="noreferrer noopener" target="_blank">
        {Card}
      </a>
    );
  }

  return Card;
}
