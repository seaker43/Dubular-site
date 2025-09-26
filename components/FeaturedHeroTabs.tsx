"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const startX = useRef(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);

  const len = slides.length;
  const clamp = (n: number) => Math.max(0, Math.min(n, len - 1));
  const w = () => wrapRef.current?.clientWidth ?? 1;
  const dragPct = (dragX / w()) * 100;

  const onDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    startX.current = e.clientX;
    setDragging(true);
    setDragX(0);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };
  const onUp = () => {
    if (!dragging) return;
    const threshold = Math.min(80, w() * 0.12);
    if (dragX <= -threshold) setIdx((i) => clamp(i + 1));
    else if (dragX >= threshold) setIdx((i) => clamp(i - 1));
    setDragging(false);
    setDragX(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => clamp(i + 1));
      if (e.key === "ArrowLeft") setIdx((i) => clamp(i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (hoverRef.current || dragging) return;
      setIdx((i) => (i + 1) % len);
    }, 5000);
    return () => clearInterval(id);
  }, [dragging, len]);

  return (
    <section
      className="stream-ring mt-6 w-full flex flex-col items-center px-4"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div
        ref={wrapRef}
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden feature-ring select-none"
        style={{ aspectRatio: "16 / 9", touchAction: "pan-y" }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <div
          className="flex h-full"
          style={{
            width: `${len * 100}%`,
            transform: `translateX(${-(idx * 100) + (dragging ? dragPct : 0)}%)`,
            transition: dragging ? "none" : "transform 500ms ease",
          }}
        >
          {slides.map((s, i) => (
            <div key={s.image} className="relative h-full w-full shrink-0 basis-full">
              <Image src={s.image} alt={s.title || "Featured"} fill priority={i === 0} className="object-cover" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
                <h1 className="mb-5 px-3 text-3xl md:text-5xl font-extrabold text-white tracking-wide text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">
                  {s.title || "Featured"}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} className={`h-2 w-2 rounded-full ${i === idx ? "bg-white" : "bg-white/40"}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
