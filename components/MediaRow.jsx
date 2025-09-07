import { useEffect, useMemo, useState } from "react";
import ThumbnailCard from "./ThumbnailCard";

function usePerPage() {
  const [per, setPer] = useState(2);
  useEffect(() => {
    const mqs = [
      [window.matchMedia("(min-width: 1280px)"), 8],
      [window.matchMedia("(min-width: 1024px)"), 6],
      [window.matchMedia("(min-width: 768px)"), 4],
      [window.matchMedia("(min-width: 640px)"), 3],
    ];
    const compute = () => {
      for (const [mq, val] of mqs) if (mq.matches) return setPer(val);
      setPer(2);
    };
    compute();
    mqs.forEach(([mq]) => mq.addEventListener("change", compute));
    return () => mqs.forEach(([mq]) => mq.removeEventListener("change", compute));
  }, []);
  return per;
}

export default function MediaRow({ title, href = "#", items = [] }) {
  const perPage = usePerPage();
  const [start, setStart] = useState(0);
  const total = items.length;

  const effectivePer = Math.min(perPage, Math.max(total, Math.min(perPage, 8)));

  const windowItems = useMemo(() => {
    if (!total) return [];
    const out = [];
    for (let i = 0; i < Math.min(effectivePer, total); i++) {
      out.push(items[(start + i) % total]);
    }
    return out;
  }, [items, start, total, effectivePer]);

  const next = () => {
    if (!total) return;
    setStart((prev) => (prev + effectivePer) % total);
  };
  const prev = () => {
    if (!total) return;
    setStart((prev) => (prev - effectivePer + total) % total);
  };

  return (
    <section className="relative my-6">
      <div className="flex items-baseline justify-between mb-3 px-2 sm:px-0">
        <h2 className="text-neon glow text-lg font-semibold tracking-wide">{title}</h2>
        {total > effectivePer && (
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="rounded-md border border-neon/40 px-3 py-1 text-neon/90 hover:text-neon hover:border-neon/80 transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="rounded-md border border-neon/40 px-3 py-1 text-neon/90 hover:text-neon hover:border-neon/80 transition"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <div
        className={[
          "grid gap-4",
          "grid-cols-2",
          "sm:grid-cols-3",
          "md:grid-cols-4",
          "lg:grid-cols-6",
          "xl:grid-cols-8",
        ].join(" ")}
      >
        {windowItems.map((item, idx) => (
          <ThumbnailCard key={`${item?.id ?? idx}-${start}`} item={item} />
        ))}
      </div>
    </section>
  );
}
