export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between px-4">
        <h2 className="text-lg font-semibold tracking-wide text-emerald-400 drop-shadow-[0_0_10px_rgba(24,226,122,0.6)]">
          {title}
        </h2>
      </div>

      <div className="mt-3 overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-4 snap-x snap-mandatory">
          {items.map((it, idx) => (
            <a key={idx} href="#" className="w-64 flex-shrink-0 snap-start group">
              <div
                className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-emerald-500/20
                           group-hover:ring-emerald-400/60 transition-transform duration-200
                           group-hover:scale-[1.02] shadow-[0_0_24px_rgba(24,226,122,0.15)]">
                <img src={it.img} alt="" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="mt-2">
                <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                  {it.title}
                  {it.live ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold
                                     text-black bg-red-500 shadow-[0_0_14px_rgba(255,0,0,0.7)] live-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      LIVE
                    </span>
                  ) : null}
                </div>
                <div className="text-xs text-white/55">{(it.tags || []).join(" • ")}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Small global helpers kept local to this component so we don't touch global CSS files */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .live-pulse { position: relative; }
        /* pulsing red glow for LIVE badge */
        .live-pulse::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.85);
          animation: pulse-red 1.2s infinite;
        }
        @keyframes pulse-red {
          0%   { box-shadow: 0 0 0 0   rgba(255, 0, 0, 0.85); }
          70%  { box-shadow: 0 0 0 12px rgba(255, 0, 0, 0.00); }
          100% { box-shadow: 0 0 0 0   rgba(255, 0, 0, 0.00); }
        }
      `}</style>
    </section>
  );
}
