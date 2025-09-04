import Link from "next/link";
import StreamCard from "./StreamCard";

export default function CategoryRow({ title, href = "#", items = [] }) {
  return (
    <section className="mt-6">
      <div className="flex items-baseline justify-between px-4 mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Link href={href} className="text-sm text-#18e27a-400">See all ▸</Link>
      </div>
      <div className="pl-4 overflow-x-auto horizontal-scroll">
        <div className="flex">
          {items.map((it, i) => (
            <StreamCard key={i} title={it.title} thumb={it.thumb} />
          ))}
        </div>
      </div>
    </section>
  );
}
