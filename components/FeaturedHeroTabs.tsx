"use client";
import Image from "next/image";

const featured = [
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600" },
];

export default function FeaturedHeroTabs() {
  const item = featured[0];
  return (
    <section className="stream-ring mt-6 w-full flex flex-col items-center px-4">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden feature-ring">
        <Image src={item.image} alt={item.title || "Featured"} width={1600} height={900} className="w-full h-auto object-cover" priority />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl font-extrabold text-white tracking-wide text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">Featured Content</h1>
        </div>
      </div>
      <div className="mt-2 flex justify-center overflow-visible w-full">
        <div className="ticker ticker--neon v2">
          <div className="ticker__track">{/* ticker items go here */}</div>
        </div>
      </div>
    </section>
  );
}
