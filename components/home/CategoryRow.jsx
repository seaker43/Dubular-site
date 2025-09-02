import Link from "next/link";

export default function CategoryRow({ title = "Category", href = "#", children }) {
  return (
    <section className="mb-6">
      <div className="px-4 flex items-baseline justify-between gap-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link href={href} className="text-sm opacity-80 hover:opacity-100">
          See all ▸
        </Link>
      </div>
      <div className="mt-3 px-2">
        {/* horizontal scroll row */}
        <div className="flex overflow-x-auto gap-3 no-scrollbar px-2">
          {children}
        </div>
      </div>
    </section>
  );
}
