import React from "react";
import Link from "next/link";

export default function CardGrid({ title, items = [] }) {
 return (
 <section className="section">
 <div className="section__head">
 <h2>{title}</h2>
 </div>
 <div className="card-grid">
 {items.map((x) => (
 <Link key={x.href} href={x.href} className="card">
 <div
 className="card__media"
 style={{ backgroundImage: `url(${x.image})` }}
 />
 <div className="card__body">
 <h3 className="glow card__title">{x.title}</h3>
 <p className="card__desc">{x.desc}</p>
 </div>
 </Link>
 ))}
 </div>
 </section>
 );
}
