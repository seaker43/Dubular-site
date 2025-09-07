import { useState } from "react";

export default function FeaturedHero({
  title = "Featured Content",
  src = "/thumbnails/trending1.jpg",   // image or .mp4
  poster = "/thumbnails/trending1.jpg",
  autoplay = true,
  muted = true,
  loop = true,
}) {
  const isVideoSrc = /\.mp4($|\?)/i.test(src);
  const [imgSrc, setImgSrc] = useState(src);
  const FALLBACK = "/placeholder.svg"; // make sure this exists in /public

  return (
    <section
      className="
        featured-hero relative w-full rounded-2xl overflow-hidden
        shadow-[0_0_80px_-20px_rgba(16,185,129,0.35)]
        bg-neutral-900/60 ring-1 ring-white/5
        aspect-[16/9] sm:aspect-[21/9]
      "
    >
      <div className="absolute inset-0">
        {isVideoSrc ? (
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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0 blur-[2px]" />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow">
          {title}
        </h2>
      </div>
    </section>
  );
}
