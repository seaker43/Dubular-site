"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function FeaturedHero({
  title = "Featured Stream",
  subtitle = "music • lofi",
  poster = "/thumbnails/featured/poster.jpg",
  src = "/thumbnails/featured/featured.mp4",
  href = "/live/featured",
  live = true,
}) {
  const videoRef = useRef(null);

  // Autoplay reliably on mobile: muted + playsInline + programmatic play.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const ensurePlay = () => v.play().catch(() => {});
    const onInteract = () => { ensurePlay(); window.removeEventListener("touchstart", onInteract); };
    ensurePlay();
    window.addEventListener("touchstart", onInteract, { once: true });

    // Pause when scrolled off screen
    const io = new IntersectionObserver(([e]) => {
      if (!v) return;
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.4 });
    io.observe(v);
    return () => { io.disconnect(); window.removeEventListener("touchstart", onInteract); };
  }, []);

  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-2xl border border-neutral-800 bg-black shadow-[0_0_24px_rgba(0,255,64,0.15)]">
      {/* Video */}
      <video
        ref={videoRef}
        className="h-[48vw] max-h-[340px] w-full object-cover md:h-[420px]"
        poster={poster}
        src={src}
        autoPlay
        muted
        playsInline
        loop
      />
      {/* Overlay gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {/* Copy & actions */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--neon)] drop-shadow-[0_0_10px_rgba(0,255,64,0.6)]">
            {title}
          </h2>
          <p className="mt-1 text-sm text-neutral-300">{subtitle}</p>
          {live && (
            <span className="mt-3 inline-flex items-center rounded-full bg-[var(--neon)] px-3 py-1 text-xs font-bold text-black shadow-[0_0_14px_rgba(0,255,64,0.8)]">
              LIVE
            </span>
          )}
        </div>
        <a
          href={href}
          className="pointer-events-auto rounded-xl border border-[var(--neon)] px-4 py-2 text-sm font-semibold text-[var(--neon)] shadow-[0_0_12px_rgba(0,255,64,0.35)] transition-colors hover:bg-[var(--neon)] hover:text-black"
        >
          Watch
        </a>
      </div>
    </section>
  );
}
