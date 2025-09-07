// components/FeaturedHero.jsx
import Image from "next/image";

export default function FeaturedHero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto mb-10">
      {/* Featured video/image */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_0_40px_10px_var(--neon)]">
        <Image
          src="/thumbs/featured/featured-1.jpg"
          alt="Featured Content"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Title + play button */}
        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neon drop-shadow-lg">
            Featured Content
          </h2>
          <button className="mt-3 px-6 py-3 bg-neon text-black font-semibold rounded-lg shadow-[0_0_15px_var(--neon)] hover:scale-105 transition-transform">
            ▶ Play
          </button>
        </div>
      </div>
    </section>
  );
}
