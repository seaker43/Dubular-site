'use client';

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

/**
 * LegacyHome
 * - Header with logo (/public/dubular2.v2.png)
 * - Featured hero (placeholder)
 * - Live channel row with red glow
 * - 3 vertical thumbnails
 */
export default function LegacyHome() {
  // Handlers must be defined inside the client component
  const handleImgError = (e) => {
    const el = e.currentTarget;
    // Fallback to a tiny transparent PNG to avoid infinite loops
    el.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";
  };

  const thumbs = useMemo(
    () => [
      { id: 1, src: "/thumbs/v1.jpg", href: "/watch/1", title: "Vertical #1" },
      { id: 2, src: "/thumbs/v2.jpg", href: "/watch/2", title: "Vertical #2" },
      { id: 3, src: "/thumbs/v3.jpg", href: "/watch/3", title: "Vertical #3" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/dubular2.v2.png"
            alt="Dubular"
            width={36}
            height={36}
            priority
            onError={handleImgError}
          />
          <span className="text-lg font-semibold tracking-wide">Dubular</span>
        </Link>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 pt-4 space-y-8">
        {/* Featured Loop Hero */}
        <section aria-label="Featured">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-zinc-800">
            <Image
              src="/featured/hero.jpg"
              alt="Featured"
              fill
              sizes="100vw"
              className="object-cover"
              onError={handleImgError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold">Featured Loop</h1>
                <p className="text-zinc-300 text-sm">Hand-picked for you</p>
              </div>
              <Link
                href="/featured"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
              >
                View
              </Link>
            </div>
          </div>
        </section>

        {/* Live Channel Row (red glow) */}
        <section aria-label="Live now" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_12px_4px_rgba(239,68,68,0.7)]" />
            <h2 className="text-lg font-semibold">Live Channels</h2>
          </div>

          <div className="relative overflow-x-auto">
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Link
                  key={i}
                  href={`/live/${i}`}
                  className="group relative w-[280px] shrink-0 overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-zinc-800 hover:ring-red-500/50"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={`/live/thumb-${i}.jpg`}
                      alt={`Live #${i}`}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={handleImgError}
                    />
                    {/* red glow edge */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-red-500/30 shadow-[0_0_30px_6px_rgba(239,68,68,0.25)_inset]"></div>
                    <span className="absolute left-2 top-2 rounded-md bg-red-600 px-2 py-0.5 text-[11px] font-semibold tracking-wide">
                      LIVE
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="line-clamp-2 text-sm text-zinc-200">
                      Live Channel #{i}
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">12.4K watching</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Three vertical thumbnails */}
        <section aria-label="Verticals">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {thumbs.map((t) => (
              <Link
                key={t.id}
                href={t.href}
                className="group overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-zinc-800"
              >
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src={t.src}
                    alt={t.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={handleImgError}
                  />
                </div>
                <div className="p-3">
                  <p className="line-clamp-2 text-sm text-zinc-200">{t.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <footer className="mx-auto mt-10 w-full max-w-6xl px-4 pb-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} Dubular
      </footer>
    </main>
  );
}
