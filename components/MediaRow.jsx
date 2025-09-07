// components/MediaRow.jsx
import Link from "next/link";
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({
  title,
  href = "#",
  items = [],
  cols = { base: 2, md: 3, lg: 4 },
  loop = true,
}) {
  // duplicate items once for seamless “loop” scroll feel
  const data = loop ? [...items, ...items] : items;

  return (
    <section className="mb-8">
      <div className="flex items-end justify-between mb-3">
        <Link href={href} className="group inline-flex items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-black text-neon glow">{title}</h2>
          <span className="sr-only">{`Go to ${title}`}</span>
        </Link>
      </div>

      <div
        className="
          grid gap-3
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
        style={{
          gridTemplateColumns: `repeat(${cols.base ?? 2}, minmax(0, 1fr))`,
        }}
      >
        {data.map((item, i) => (
          <ThumbnailCard key={`${item.title}-${i}`} {...item} />
        ))}
      </div>
    </section>
  );
}
