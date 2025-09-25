"use client";

type Props = {
  messages?: string[];
  durationSec?: number; // full loop duration (seconds)
  className?: string;
};

export default function Ticker({
  messages,
  durationSec = 20,
  className = "",
}: Props) {
  const defaults = [
    "welcome to dubUlar 🔥",
    "Creators are live right now",
    "Tap a thumbnail to join the stream",
    "Follow for early access updates",
  ];
  const items = messages?.length ? messages : defaults;

  const row = (
    <ul className="flex items-center gap-8 shrink-0">
      {items.map((m, i) => (
        <li key={i} className="text-cyan-300 text-sm whitespace-nowrap">{m}</li>
      ))}
    </ul>
  );

  return (
    <div
      className={`ticker w-full ${className}`}
      role="status"
      aria-live="polite"
      style={{ ["--dur" as any]: `${durationSec}s` }}
    >
      <div className="ticker__track">
        {row}
        {row}
      </div>
    </div>
  );
}
