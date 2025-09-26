"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { image: string; title?: string };

const slides: Slide[] = [
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600", title: "Featured Content" },
  { image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600", title: "Esports Spotlight" },
  { image: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=1600", title: "Community Events" },
];

export default function FeaturedHeroTabs() {
  const [i, setI] = useState(0);
  const hoverRef = useRef(false);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(() => { if (!hoverRef.current) next(); }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="stream-ring mt-6 w-full flex flex-col items-center px-4"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {/* Fixed aspect ratio wrapper prevents layout jump */}
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden feature-ring" style={{ aspectRatio: "16 / 9" }}>
        {slides.map((s, idx) => (
          <Image
            key={s.image}
            src={s.image}
            alt={s.title || "Featured"}
            fill
            priority={idx === i}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl font-extrabold text-white tracking-wide text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">
            {slides[i].title || "Featured"}
          </h1>
        </div>

        <button aria-label="Previous" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl bg-black/50 px-3 py-2 text-white hover:bg-black/70">‹</button>
        <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-black/50 px-3 py-2 text-white hover:bg-black/70">›</button>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button key={idx} aria-label={`Go to slide ${idx + 1}`} onClick={() => setI(idx)} className={`h-2 w-2 rounded-full ${idx === i ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
