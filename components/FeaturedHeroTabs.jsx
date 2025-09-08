// components/FeaturedHeroTabs.jsx
import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_TABS = [
  { key: "gaming",  title: "Gaming",  src: "/thumbnails/trending1.jpg", isVideo: false },
  { key: "irl",     title: "IRL",     src: "/thumbnails/trending2.jpg", isVideo: false },
  { key: "music",   title: "Music",   src: "/thumbnails/trending1.jpg", isVideo: false },
  { key: "podcast", title: "Podcast", src: "/thumbnails/trending2.jpg", isVideo: false },
];

export default function FeaturedHeroTabs({
  tabs = DEFAULT_TABS,
  intervalMs = 5000,
  startKey = "gaming",
  pauseOnHover = true,
}) {
  const keys = useMemo(() => tabs.map((t) => t.key), [tabs]);
  const [active, setActive] = useState(keys.includes(startKey) ? startKey : keys[0]);
  const timerRef = useRef(null);
  const wrapRef = useRef(null);

  const activeIndex = keys.indexOf(active);
  const current = tabs[activeIndex];

  // Alternate glow color by tab index: even = pink, odd = blue
  const glowClass = activeIndex % 2 === 0 ? "featured-glow-pink" : "featured-glow-blue";

  // autoplay rotate
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (keys.indexOf(active) + 1) % keys.length;
      setActive(keys[next]);
    }, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [active, intervalMs, keys]);

  // pause on hover (optional)
  useEffect(() => {
    if (!pauseOnHover || !wrapRef.current) return;
    const el = wrapRef.current;
    const stop = () => clearInterval(timerRef.current);
    const start = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        const next = (keys.indexOf(active) + 1) % keys.length;
        setActive(keys[next]);
      }, intervalMs);
    };
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
    };
  }, [pauseOnHover, active, intervalMs, keys]);

  return (
    <section
      ref={wrapRef}
      className={`
        featured-hero ${glowClass}
        w-screen
        h-[50vh] md:h-[55vh]      /* shorter than before */
        relative mb-4 overflow-hidden rounded-2xl
        ring-1 ring-white/10
      `}
      aria-label="Featured Content"
    >
      {/* media */}
      <div className="absolute inset-0">
        {current?.isVideo ? (
          <video
            className="w-full h-full object-cover"
            src={current.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            key={current?.key}
            src={current?.src}
            alt={current?.title}
            className="w-full h-full object-cover will-change-transform"
            loading="eager"
            decoding="async"
          />
        )}
      </div>

      {/* subtle readability gradient (kept minimal since title text is removed) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/30" />

      {/* TAB BUTTONS ONLY (no big title overlay) */}
      <div
        role="tablist"
        aria-label="Featured categories"
        className="absolute left-0 right-0 bottom-3 flex items-center justify-center gap-2"
      >
        {tabs.map((t, i) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${t.key}`}
              onClick={() => setActive(t.key)}
              className={`
                px-3 py-1.5 rounded-full text-sm font-semibold transition-all
                ${isActive
                  ? "bg-white text-black"
                  : "bg-white/20 text-white backdrop-blur hover:bg-white/30"}
              `}
            >
              {t.title}
            </button>
          );
        })}
      </div>
    </section>
  );
}
