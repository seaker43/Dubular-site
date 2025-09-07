// components/FeaturedHero.jsx
"use client";

import { useEffect, useRef } from "react";

export default function FeaturedHero() {
  const vidRef = useRef(null);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    // Try play immediately (mobile requires muted + playsInline)
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    // Auto-pause/play when (not) visible
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!v) return;
        if (entry.isIntersecting) tryPlay();
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-[calc(var(--header-height,64px)+1rem)] mb-10">
      {/* Hero frame (16:9) */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(57,255,20,0.6)] ring-1 ring-[rgba(57,255,20,0.25)]">
        <video
          ref={vidRef}
          className="h-full w-full object-cover"
          poster="/thumbs/featured/featured-1.jpg"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src="/media/featured/featured-1.mp4" type="video/mp4" />
        </video>
        {/* Optional soft vignette edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      </div>

      {/* Title block sits BELOW the thumbnail */}
      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-neon drop-shadow-[0_0_12px_rgba(57,255,20,0.6)]">
          Featured Content
        </h2>

        {/* Status pill (autoplay indicator) */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_10px_rgba(57,255,20,0.9)]" />
          <span className="text-xs md:text-sm text-zinc-300 tracking-wide">
            Auto-playing
          </span>
        </div>
      </div>
    </section>
  );
}
