/* Legacy home layout: header + hero + live row + 3 vertical thumbnails (Top 5 categories) */
export default function LegacyHome() {
  // --- Placeholder data. Replace with real data when ready. ---
  const topStreamers = [
    { name: "Streamer A", viewers: 12400 },
    { name: "Streamer B", viewers: 9800 },
    { name: "Streamer C", viewers: 7600 },
    { name: "Streamer D", viewers: 6200 },
    { name: "Streamer E", viewers: 5100 },
  ];

  const topViewers = [
    { name: "ViewerOne", points: 45210 },
    { name: "ViewerTwo", points: 38940 },
    { name: "ViewerThree", points: 33310 },
    { name: "ViewerFour", points: 29750 },
    { name: "ViewerFive", points: 25110 },
  ];

  const topGifters = [
    { name: "GiftLord", gifts: 320 },
    { name: "SantaBits", gifts: 280 },
    { name: "TipTitan", gifts: 240 },
    { name: "DonorX", gifts: 190 },
    { name: "Whale", gifts: 160 },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <img src="/dubular2.v2.png" alt="Dubular" className="h-7 w-auto" />
          <span className="text-lg font-semibold">Dubular</span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 space-y-8">
        {/* Featured Loop Hero */}
        <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Featured Loop</h2>
              <p className="text-white/70">Hand-picked for you</p>
            </div>
            <a
              href="/streams/featured"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              View
            </a>
          </div>
        </section>

        {/* Live Channels row (glowing red) */}
        <section className="space-y-3">
          <h3 className="text-2xl font-bold">Live Channels</h3>
          <div className="relative overflow-x-auto">
            <ul className="flex gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <li
                  key={i}
                  className="group relative w-56 shrink-0 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <div className="absolute -top-2 left-3 inline-flex items-center gap-2 rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-[0_0_20px_4px_rgba(239,68,68,0.55)]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                    LIVE
                  </div>
                  <div className="aspect-video w-full rounded-lg bg-white/[0.06]" />
                  <div className="mt-2">
                    <p className="truncate text-sm font-semibold">Live Channel #{i + 1}</p>
                    <p className="text-xs text-white/70">12.4K watching</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Three vertical thumbnails as Top 5 categories */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Thumbnail 1: Top 5 Streamers */}
          <a href="/rank?tab=streamers" className="group block rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative">
              <div className="aspect-[3/4] w-full bg-gradient-to-b from-white/[0.08] to-white/[0.02]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 p-4">
                <h4 className="text-xl font-semibold">Top 5 Streamers</h4>
                <ol className="mt-2 space-y-1 text-sm">
                  {topStreamers.map((s, i) => (
                    <li key={s.name} className="flex items-center justify-between">
                      <span className="truncate">
                        <span className="mr-2 tabular-nums text-white/60">{i + 1}.</span>
                        {s.name}
                      </span>
                      <span className="text-white/60">{Intl.NumberFormat().format(s.viewers)}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </a>

          {/* Thumbnail 2: Top 5 Viewers */}
          <a href="/rank?tab=viewers" className="group block rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative">
              <div className="aspect-[3/4] w-full bg-gradient-to-b from-white/[0.08] to-white/[0.02]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 p-4">
                <h4 className="text-xl font-semibold">Top 5 Viewers</h4>
                <ol className="mt-2 space-y-1 text-sm">
                  {topViewers.map((v, i) => (
                    <li key={v.name} className="flex items-center justify-between">
                      <span className="truncate">
                        <span className="mr-2 tabular-nums text-white/60">{i + 1}.</span>
                        {v.name}
                      </span>
                      <span className="text-white/60">{Intl.NumberFormat().format(v.points)} pts</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </a>

          {/* Thumbnail 3: Top 5 Gifters */}
          <a href="/rank?tab=gifters" className="group block rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative">
              <div className="aspect-[3/4] w-full bg-gradient-to-b from-white/[0.08] to-white/[0.02]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 p-4">
                <h4 className="text-xl font-semibold">Top 5 Gifters</h4>
                <ol className="mt-2 space-y-1 text-sm">
                  {topGifters.map((g, i) => (
                    <li key={g.name} className="flex items-center justify-between">
                      <span className="truncate">
                        <span className="mr-2 tabular-nums text-white/60">{i + 1}.</span>
                        {g.name}
                      </span>
                      <span className="text-white/60">{Intl.NumberFormat().format(g.gifts)} gifts</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </a>
        </section>
      </div>
    </main>
  );
}
