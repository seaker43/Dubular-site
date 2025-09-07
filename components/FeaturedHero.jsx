// components/FeaturedHero.jsx
export default function FeaturedHero({
  title = "Featured Content",
  src = "/thumbnails/trending1.jpg", // image or .mp4 path
  poster = "/thumbnails/trending1.jpg",
  autoplay = true,
  muted = true,
  loop = true,
}) {
  const isVideo = /\.mp4($|\?)/i.test(src);

  return (
    <section className="featured-hero relative w-full rounded-2xl overflow-hidden shadow-[0_0_80px_-20px_rgba(16,185,129,0.35)] bg-neutral-900/60 ring-1 ring-white/5">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      {isVideo ? (
        <video
          className="w-full h-full object-cover"
          src={src}
          poster={poster}
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          className="w-full h-full object-cover"
          src={src}
          alt={title}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow">
          {title}
        </h2>
      </div>
    </section>
  );
}
