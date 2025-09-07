// components/Header.jsx
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const resizeObserver = new ResizeObserver(() => {
      const h = header.offsetHeight || 64; // fallback
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    });

    resizeObserver.observe(header);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-neon drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
          dubUlar
        </Link>

        {/* Nav (placeholder, can add links later) */}
        <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
          <Link href="/find" className="hover:text-neon transition">Find</Link>
          <Link href="/trending" className="hover:text-neon transition">Trending</Link>
          <Link href="/recommended" className="hover:text-neon transition">Recommended</Link>
        </nav>
      </div>
    </header>
  );
}
