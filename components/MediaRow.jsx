// components/MediaRow.jsx
import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({ title, items = [], href = "#" }) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <a className="text-cyan-400 font-semibold" href={href}>
          SEE ALL →
        </a>
      </div>

      {/* grid avoids overflow so glow remains visible */}
      <div className="grid gap-4">
        {items.map((it, i) => (
          <ThumbnailCard
            key={it.id ?? `${title}-${i}`}
            title={it.title}
            image={it.image}
            color={it.color} // expect "pink" | "blue" | "red"
          />
        ))}
      </div>
    </section>
  );
}
