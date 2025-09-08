// components/FeaturedHeroTabs.jsx
import { useState, useEffect, useMemo } from "react";

const TABS = [
  {
    title: "Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "IRL",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Music",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Podcast",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function FeaturedHeroTabs() {
  const [active, setActive] = useState(0);

  // alternate glow (pink/blue)
  const glowClass = useMemo(
    () => (active % 2 === 0 ? "featured-glow-pink" : "featured-glow-blue"),
    [active]
  );

  // auto-rotate every 7s
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % TABS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = TABS[active];

  return (
    <section
      className={`hero-offset featured-hero ${glowClass} mx-4 md:mx-6 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50`}
    >
      {/* Hero media */}
      <div className="relative w-full h-[48vh] md:h-[55vh]">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        {/* gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
      </div>

      {/* Tabs */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-3 flex-wrap">
        {TABS.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition-transform",
                "bg-black/60 text-white backdrop-blur-sm",
                "hover:scale-[1.05] active:scale-[0.97]",
                isActive ? "ring-2 ring-white/80" : "opacity-90",
              ].join(" ")}
            >
              {t.title}
            </button>
          );
        })}
      </div>
    </section>
  );
}
