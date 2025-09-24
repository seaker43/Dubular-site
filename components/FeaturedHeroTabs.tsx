"use client";
import Image from "next/image";

export default function FeaturedHeroTabs() {
  return (
    <section className="w-full flex justify-center">
      <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-[0_0_40px_15px_rgba(255,0,255,0.5)]">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600"
          alt="Featured Stream"
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">Featured Stream</h2>
          <p className="text-neutral-300">Now playing live on dubUlar</p>
        </div>
      </div>
    </section>
  );
}
