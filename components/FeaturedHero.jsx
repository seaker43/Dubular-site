// components/FeaturedHero.jsx
import { useState } from "react";

export default function FeaturedHero({
  title = "Featured Content",
  src = "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  poster = "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  autoplay = false,
  muted = true,
  loop = true,
}) {
  const isVideo = /\.mp4($|\?)/i.test(src);
  const [imgSrc, setImgSrc] = useState(src);
  const FALLBACK = "/placeholder.svg";

  return (
    <section
      className="
        relative w-full rounded-2xl overflow-hidden
        ring-1 ring-white/5 bg-neutral-900/60
        shadow-[0_0_80px_-20px_rgba(16,185,129,0.35)]
        /* Taller hero: was aspect-[16/9] */
        aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]
        mb-4
      "
    >
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            className="w-full h-full object-cover"
            src={src}
            poster={poster || FALLBACK}
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src={imgSrc}
            alt={title}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            onError={() => { if (imgSrc !== FALLBACK) setImgSrc(FALLBACK); }}
          />
        )}
      </div>

      <div className="hero-edge" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow">{title}</h2>
      </div>
    </section>
  );
}
