"use client";
import Image from "next/image";

const featured = [
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
  },
];

export default function FeaturedHeroTabs() {
  const item = featured[0];
  return (
    <section className="stream-ring mt-6 w-full flex justify-center px-4">
      <div className="relative w-full max-w-5xl relative relative rounded-2xl overflow-hidden feature-ring">
        <Image
          src={item.image}
          alt={item.title}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl font-extrabold text-white tracking-wide text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">Featured Content</h1>
        </div>
      </div>
    </section>
  );
}
