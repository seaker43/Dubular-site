"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Slide = { image: string; title?: string };
const slides: Slide[] = [
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600", title: "Featured Content" },
  { image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600", title: "Community Events" },
  { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600", title: "Creator Highlights" },
];

export default function FeaturedHeroTabs() {
  const [idx, setIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const hoverRef = useRef(false);

  const clamp = (n: number) => Math.max(0, Math.min(n, slides.length - 1));
  const widthPx = () => wrapRef.current?.clientWidth ?? 1;
  const dragPct = (dragX / widthPx()) * 100;

  // mouse handlers
  const onMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setDragging(true);
    setDragX(0);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp, { once: true });
  };
  const onMouseMove = (e: MouseEvent) => setDragX(e.clientX - startX.current);
  const onMouseUp = () => {
    decide();
    window.removeEventListener("mousemove", onMouseMove);
  };

  // touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setDragging(true);
    setDragX(0);
  };
  const onTouchMove = (e: React.TouchEvent) => setDragX(e.touches[0].clientX - startX.current);
  const onTouchEnd = () => decide();

  const decide = () => {
    if (!dragging) return;
    const threshold = Math.min(80, widthPx() * 0.12); // 12% or 80px
    if (dragX <= -threshold) setIdx((i) => (i + 1) % slides.length);
    else if (dragX >= threshold) setIdx((i) => (i - 1 + slides.length) % slides.length);
    setDragging(false);
    setDragX(0);
  };

  // autoplay (fast), paused on hover/drag/hidden tab
  useEffect(() => {
    let id: number | undefined;
    const start = () => {
      id = window.setInterval(() => {
        if (hoverRef.current || dragging || document.hidden) return;
        setIdx((i) => (i + 1) % slides.length);
      }, 2200);
    };
    start();
    const vis = () => { if (!document.hidden) { clearInterval(id); start(); } };
    document.addEventListener("visibilitychange", vis);
    return () => { clearInterval(id); document.removeEventListener("visibilitychange", vis); };
  }, [dragging]);

  return (
    <section
      className="stream-ring mt-6 w-full flex flex-col items-center px-4"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {/* Strict 16:9 frame */}
      <div
        ref={wrapRef}
        className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden feature-ring select-none touch-pan-x cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        {/* track */}
        <div
          className="flex h-full"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(${-(idx * 100) + (dragging ? dragPct : 0)}%)`,
            transition: dragging ? "none" : "transform 500ms ease",
          }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative basis-full shrink-0 grow-0">
              <Image
                src={s.image}
                alt={s.title || "Featured"}
                fill
                priority={i === 0}
                className="object-cover"
                draggable={false}
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </div>
          ))}
        </div>

        {/* persistent title */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl font-extrabold text-white tracking-wide text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">
            {slides[idx].title || "Featured"}
          </h1>
        </div>

        {/* dots */}
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-white" : "bg-white/40"}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
