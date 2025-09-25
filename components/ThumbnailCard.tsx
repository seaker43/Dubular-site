"use client";

type Thumb = { title?: string; image?: string; href?: string; live?: boolean };

export default function ThumbnailCard({ data }: { data: Thumb }) {
  const { title = "", image = "/placeholder.svg", href, live = true } = data || {};
  const FALLBACK_IMG =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

  const card = (
    <div className="rounded-2xl overflow-hidden bg-neutral-900 thumb-glow ring-1 ring-neutral-800 thumb-glow">
      <div className="relative aspect-video">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            const t = e.currentTarget;
            if (t.src !== FALLBACK_IMG) {
              t.src = FALLBACK_IMG;
              t.onerror = null;
            }
          }}
        />
        {live && (
          <span className="absolute top-2 left-2 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold">
            LIVE
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-cyan-300 text-sm font-medium">{title}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{card}</a> : card;
}
