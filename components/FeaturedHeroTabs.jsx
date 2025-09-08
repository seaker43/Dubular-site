// components/FeaturedHeroTabs.jsx
import { useState, useEffect, useMemo } from "react";

const TABS = [
  {
    title: "Gaming",
    // Unsplash topic query — always returns something
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

  // Alternate neon glow by tab (pink ↔ blue)
  const glowClass = useMemo(
    () => (active % 2 === 0 ? "featured-glow-pink" : "featured-glow-blue"),
    [active]
  );

  // Optional: auto-rotate every 7s (pause when user taps a tab for ~10s)
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
      aria-label="Featured Content"
    >
      {/* Media */}
      <div className="relative w-full h-[48vh] md:h-[55vh]">
        {/* image tag keeps it simple for remote URLs; no Next/Image config needed */}
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          onError={(e) => {
            // graceful fallback if remote fails
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop";
          }}
        />

        {/* Subtle bottom fade so tabs sit nicely */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Tabs (no large title overlay per your request) */}
      <div className="absolute bottom-3 left-3 right-3 flex gap-3 flex-wrap">
        {TABS.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition-transform",
                "backdrop-blur bg-white/90 text-black",
                "hover:scale-[1.03] active:scale-[0.97]",
                isActive ? "ring-2 ring-white" : "opacity-90",
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
