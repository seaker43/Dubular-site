import Link from "next/link";

export default function CategoryRow({ title, href, children }) {
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-2 px-2">
        <h2 style={{fontSize:"16px", fontWeight:600}}>{title}</h2>
        <Link href={href || "#"} style={{fontSize:"13px", color:"#00e6ff"}}>See all</Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 px-2">
        {children}
      </div>
    </section>
  );
}
