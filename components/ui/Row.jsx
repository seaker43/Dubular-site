import Link from "next/link";

export default function Row({ title, seeAllHref="/streams", children }) {
  return (
    <section className="row">
      <div className="row-head">
        <h2 className="row-title">{title}</h2>
        <Link href={seeAllHref} className="see-all">See all ▸</Link>
      </div>
      <div className="rail">{children}</div>
    </section>
  );
}
