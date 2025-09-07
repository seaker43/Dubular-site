// components/MediaRow.jsx
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({
  title = "Category",
  items = [],
  href = "#",
}) {
  // duplicate to simulate infinite loop
  const looped = [...items, ...items];

  return (
    <section className="mb-10">
      <div className="mb-3 flex items-baseline justify-between">
        <a
          href={href}
          className="text-2xl font-extrabold text-[#24ff60] drop-shadow-[0_0_18px_rgba(10,255,50,0.45)]"
        >
          {title}
        </a>
      </div>

      <div
        className={[
          "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1",
          "scroll-smooth"
        ].join(" ")}
      >
        {looped.map((it, i) => (
          <div
            key={`${it.title}-${i}`}
            className="snap-start shrink-0 w-[78vw] sm:w-[48vw] md:w-[36vw] lg:w-[28vw] xl:w-[22vw]"
          >
            <ThumbnailCard
              href={it.href}
              title={it.title}
              subtitle={`${it.category ?? ""}${it.category && it.tag ? " • " : ""}${it.tag ?? ""}`}
              src={it.src}
              badge={it.badge}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
