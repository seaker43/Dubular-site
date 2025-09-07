import { useEffect, useRef } from "react";

/**
 * Renders a full-width 16:9 featured block.
 * If `src` is a video file, plays it (muted/loop); otherwise shows an image.
 * The "Featured Content" label is BELOW the media.
 */
export default function FeaturedHero({
  src = "/thumbnails/trending/trending1.jpg",
  title = "Featured Content",
  autoplay = true,
  muted = true,
  loop = true,
}) {
  const isVideo = /\.(mp4|webm|mov|m4v)$/i.test(src);
  const vidRef = useRef(null);

  useEffect(() => {
    if (isVideo && vidRef.current) {
      const v = vidRef.current;
      const p = v.play?.();
      if (p && typeof p.then === "function") p.catch(() => {});
    }
  }, [isVideo, src]);

  return (
    <section className="w-full px-2 sm:px-4 mt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className="relative aspect-video w-full overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        >
          {isVideo ? (
            <video
              ref={vidRef}
              src={src}
              className="h-full w-full object-cover"
              playsInline
              muted={muted}
              autoPlay={autoplay}
              loop={loop}
              preload="metadata"
            />
          ) : (
            <img
              src={src}
              alt={title}
              decoding="async"
              loading="eager"
              className="h-full w-full object-cover"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            />
          )}

          {/* subtle bottom gradient for contrast */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <h2 className="mt-3 text-white text-2xl font-extrabold tracking-tight">
          {title}
        </h2>
      </div>
    </section>
  );
}
