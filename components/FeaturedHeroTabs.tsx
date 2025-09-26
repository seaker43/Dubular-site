"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const slides = [
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600", title: "Featured Content" },
  { image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600", title: "Community Events" },
  { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600", title: "Creator Highlights" },
];

export default function FeaturedHeroTabs() {
  const [idx, setIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);

  const clamp = (n: number) => Math.max(0, Math.min(n, slides.length - 1));
  const widthPx = () => wrapRef.current?.clientWidth ?? 1;
  const dragPct = (dragX / widthPx()) * 100;

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    startX.current = e.clientX;
    setDragging(true);
    setDragX(0);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };
  const onPointerUp = () => {
    if (!dragging) return;
    const threshold = Math.min(80, widthPx() * 0.12);
    if (dragX <= -threshold) setIdx((i) => clamp(i + 1));
    else if (dragX >= threshold) setIdx((i) => clamp(i - 1));
    setDragging(false);
    setDragX(0);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (hoverRef.current || dragging) return;
      setIdx((i) => (i + 1) % slides.length);
    }, 2500); // faster autoplay
    return () => clearInterval(id);
  }, [dragging]);

  return (
    <section
      className="stream-ring mt-6 w-full flex flex-col items-center px-4"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div
        ref={wrapRef}
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden feature-ring touch-pan-x select-none"
        style={{ aspectRatio: "16 / 9" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(${-(idx * 100) + (dragging ? dragPct : 0)}%)`,
            transition: dragging ? "none" : "transform 500ms ease",
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((item, i) => (
            <div key={i} className="w-full shrink-0 grow-0 basis-full relative">
              <Image
                src={item.image}
                alt={item.title}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* persistent title overlay */}
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
