import React from "react";

export default function FeaturedHero() {
  return (
    <section
      className="relative w-full"
      style={{ paddingTop: "calc(var(--header-height) + 1rem)" }}
    >
      {/* 16:9, fills width, large and tall */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl">
        <video
          className="w-full h-full object-cover"
          src="/videos/featured.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Title sits BELOW the thumbnail */}
      <h2 className="mt-4 text-3xl font-bold gold-glow">Featured Content</h2>
    </section>
  );
}
