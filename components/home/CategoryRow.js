import StreamCard from "./StreamCard";

export default function CategoryRow({ title }) {
  const placeholders = Array.from({ length: 10 }, (_, i) => `Night Raid Tactics #${i + 1}`);

  return (
    <div className="mb-6">
      <div className="flex justify-between px-4 mb-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <button className="text-sm text-cyan-400">See all ▸</button>
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide px-2">
        {placeholders.map((t, i) => (
          <StreamCard key={i} title={t} />
        ))}
      </div>
    </div>
  );
}
