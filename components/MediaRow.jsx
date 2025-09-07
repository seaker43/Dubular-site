import MediaCard from "./MediaCard";

export default function MediaRow({ title, items = [] }) {
  return (
    <section className="mt-6">
      <h2 className="section-title safe-px mb-3">{title}</h2>
      <div className="safe-px">
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it, i) => (
            <div key={i} className="min-w-[82%] sm:min-w-[360px]">
              <MediaCard {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
