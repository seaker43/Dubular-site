/**
 * Horizontal row with fixed-size cards and clear gaps.
 * Props:
 * - title: string
 * - items: [{ title, img, live, edgeColor, flames }]
 * - seeAllHref: string
 * - trending: boolean -> apply flames on items when true
 */
import StreamCard from "./StreamCard";

export default function Row({ title, items = [], seeAllHref = "#", trending = false }) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-[26px] sm:text-[28px] font-extrabold text-[rgb(162,255,90)] drop-shadow-[0_0_14px_#6dff5a88]">
          {title}
        </h2>
        <a
          href={seeAllHref}
          className="text-sm px-3 py-1 rounded border border-pink-400/40 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 transition drop-shadow-[0_0_10px_#ff4dff90]"
        >
          See all &gt;
        </a>
      </div>

      <div
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700/50 scrollbar-track-transparent"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div
          className="grid auto-cols-[max-content] grid-flow-col gap-4 sm:gap-5 px-1"
          style={{ scrollPadding: "16px" }}
        >
          {items.map((v, i) => (
            <div key={i} style={{ scrollSnapAlign: "start" }}>
              <StreamCard
                title={v.title}
                img={v.img}
                live={v.live}
                edgeColor={v.edgeColor}
                flames={trending}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
