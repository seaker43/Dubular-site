"use client";
import { useMemo, useState } from "react";

type MetricKey =
  | "mostGifted" | "mostViewed" | "mostLiked" | "mostFollowed"
  | "mostViewingHours" | "totalHoursStreamed" | "mostConsecHours";
type GroupKey = "creators" | "viewers";

const GROUPS: { key: GroupKey; label: string }[] = [
  { key: "creators", label: "Creators" },
  { key: "viewers", label: "Viewers" },
];

const METRICS: Record<GroupKey, { key: MetricKey; label: string }[]> = {
  creators: [
    { key: "mostGifted", label: "Most Gifted" },
    { key: "mostViewed", label: "Most Viewed" },
    { key: "mostLiked", label: "Most Liked" },
    { key: "mostFollowed", label: "Most Followed" },
    { key: "mostViewingHours", label: "Most Viewing Hours" },
    { key: "totalHoursStreamed", label: "Total Hours Streamed" },
    { key: "mostConsecHours", label: "Most Cons. Hours Streamed" },
  ],
  viewers: [
    { key: "mostGifted", label: "Most Gifted" },
    { key: "mostViewingHours", label: "Most Viewing Hours" },
  ],
};

// TEMP seed data (replace with real API later)
const seed = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  value: Math.round(1000 - i * 37),
  avatar: `https://i.pravatar.cc/80?img=${(i % 70) + 1}`,
}));

export default function RankPage() {
  const [group, setGroup] = useState<GroupKey>("creators");
  const [metric, setMetric] = useState<MetricKey>("mostGifted");

  // derive list (placeholder sort)
  const list = useMemo(() => seed.slice().sort((a, b) => b.value - a.value), [group, metric]);

  return (
    <main className="min-h-[calc(var(--vvh)-var(--header-h)-var(--bottombar-h))] pb-[var(--bottombar-h)] px-4 overflow-x-hidden">
      <section className="relative min-h-[calc(var(--vvh)-var(--header-h)-var(--bottombar-h))] w-full overflow-hidden pt-[calc(var(--header-h)+8px)]">
        {/* Background thumbnail */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1800"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col px-4 py-6">
          {/* Title */}
          <h1 className="text-center text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-4">
            Dubular Leaderboard
          </h1>

          {/* Group tabs */}
          <div className="sticky top-[calc(var(--header-h)+8px)] z-30 mx-auto mb-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur p-1">
            {GROUPS.map(g => (
              <button
                key={g.key}
                onClick={() => {
                  setGroup(g.key);
                  // snap to first metric of the group
                  setMetric(METRICS[g.key][0].key);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  group === g.key ? "bg-emerald-500 text-black" : "text-white/80 hover:text-white"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Metric chips */}
          <div className="mb-5 flex w-full snap-x items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {METRICS[group].map(m => (
              <button
                key={m.key}
                onClick={() => setMetric(m.key)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  metric === m.key
                    ? "border-emerald-400 bg-emerald-400 text-black"
                    : "border-white/15 bg-black/30 text-white/80 hover:text-white"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Leaderboard card */}
          <div className="glow-red/0 relative w-full grow overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur">
            {/* header row */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="text-sm text-white/70">
                {GROUPS.find(g => g.key === group)?.label} • {METRICS[group].find(m => m.key === metric)?.label}
              </div>
              <div className="text-xs text-white/50">Top 20</div>
            </div>

            {/* list */}
            <ol className="h-full overflow-y-auto p-2 pr-3">
              {list.map((u, i) => (
                <li
                  key={u.id}
                  className="group flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/5"
                >
                  <div className="w-8 text-center text-white/70">{i + 1}</div>
                  <img src={u.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                  <div className="min-w-0 grow">
                    <div className="truncate text-white/90">{u.name}</div>
                    <div className="text-xs text-white/50">
                      {METRICS[group].find(m => m.key === metric)?.label}
                    </div>
                  </div>
                  <div className="text-right text-emerald-400 font-semibold tabular-nums">{u.value}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
