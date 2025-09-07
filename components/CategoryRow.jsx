import ThumbnailCard from "./ThumbnailCard";

export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="px-4 md:px-6">
      <h2 className="heading-neon text-2xl md:text-3xl mb-3">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <ThumbnailCard key={i} {...it} />
        ))}
      </div>
      <div className="mt-3 h-1 w-36 rounded-full bg-[color:var(--neon)]/80 shadow-glow" />
    </section>
  );
}
