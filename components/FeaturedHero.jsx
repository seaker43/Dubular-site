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
  intervalMs = 5000,     // autoplay speed
  startKey = "gaming",
  pauseOnHover = true,
}) {
  const keys = useMemo(() => tabs.map(t => t.key), [tabs]);
  const [active, setActive] = useState(keys.includes(startKey) ? startKey : keys[0]);
  const timerRef = useRef(null);
  const wrapRef = useRef(null);

  const activeIndex = keys.indexOf(active);

  // autoplay rotate
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const i = (keys.indexOf(active) + 1) % keys.length;
      setActive(keys[i]);
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
        const i = (keys.indexOf(active) + 1) % keys.length;
        setActive(keys[i]);
      }, intervalMs);
    };
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
    };
  }, [pauseOnHover, active, intervalMs, keys]);

  const current = tabs[activeIndex];

  return (
    <section
      ref={wrapRef}
      className="
        featured-hero featured-glow
        w-screen
        h-[60vh] md:h-[65vh]        /* ~10% taller than 50vh */
        relative mb-4 overflow-hidden rounded-2xl
        ring-1 ring-white/10
      "
      aria-label="Featured Content"
    >
      {/* media layer (no top crop; we let header padding handle spacing) */}
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
            className="
              w-full h-full object-cover
              will-change-transform opacity-0
              animate-[fadeIn_400ms_ease-out_forwards]
            "
            loading="eager"
            decoding="async"
          />
        )}
      </div>

      {/* readable gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

      {/* title */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow">
          {current?.title}
        </h2>
      </div>

      {/* tabs */}
      <div
        role="tablist"
        aria-label="Featured categories"
        className="absolute left-0 right-0 bottom-3 flex items-center justify-center gap-2"
      >
        {tabs.map((t) => {
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

      {/* keyframe */}
      <style jsx>{`
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </section>
  );
                                       }
