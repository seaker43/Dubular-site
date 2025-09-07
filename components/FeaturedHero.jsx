// components/FeaturedHero.jsx
import { useState } from "react";

export default function FeaturedHero({
  title = "Featured Content",
  src = "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  poster = "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  autoplay = false,
  muted = true,
  loop = true,
  live = false,
  fullHeight = false, // 👈 new prop
}) {
  const isVideo = /\.mp4($|\?)/i.test(src);
  const [imgSrc, setImgSrc] = useState(src);
  const FALLBACK = "/placeholder.svg";

  // Decide size: half-screen vs aspect ratio
  const sizeClass = fullHeight
    ? "h-[calc(50vh-56px)] rounded-b-2xl"
    : "aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5] rounded-2xl";

  return (
    <section
      className={`
        relative w-full overflow-hidden
        thumbnail-default
        ${sizeClass}
        mb-4
      `}
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
            onError={() => {
              if (imgSrc !== FALLBACK) setImgSrc(FALLBACK);
            }}
          />
        )}
      </div>

      {live && <span className="live-badge">LIVE</span>}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow">
          {title}
        </h2>
      </div>
    </section>
  );
}
