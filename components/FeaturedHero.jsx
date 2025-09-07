// components/FeaturedHero.jsx
import Image from "next/image";

export default function FeaturedHero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto mt-20 mb-8">
      <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(57,255,20,0.8)]">
        <Image
          src="/thumbs/featured/featured-1.jpg"
          alt="Featured Content"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            Featured Content
          </h2>
          <button className="mt-3 px-6 py-3 bg-neon text-black font-semibold rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.8)] hover:shadow-[0_0_25px_rgba(57,255,20,1)] transition">
            ▶ Play
          </button>
        </div>
      </div>
    </section>
  );
}
