"use client";
import Image from "next/image";

const featured = [
  {
    title: "Featured Stream",
    subtitle: "Now playing live on dubUlar",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
  },
  {
    title: "Exclusive Premiere",
    subtitle: "Catch it first on dubUlar",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
  },
];

export default function FeaturedHeroTabs() {
  const item = featured[0]; // later you can randomize or rotate
  return (
    <section className="w-full flex justify-center px-4">
      <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-[0_0_40px_15px_rgba(255,0,255,0.5)]">
        <Image
          src={item.image}
          alt={item.title}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">{item.title}</h2>
          <p className="text-neutral-300">{item.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
