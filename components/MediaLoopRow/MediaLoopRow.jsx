import React from "react";
import Thumb from "../Thumb";
export default function MediaLoopRow({ items = [], title = "Media" }) {
 return (
 <section className="space-y-2">
 <h2 className="text-lg font-semibold">{title}</h2>
 <div className="flex gap-3 overflow-x-auto pb-2">
 {items.map((it, i) => (
 <Thumb key={i} src={it?.thumbnail || it?.src} alt={it?.title || "item"} />
 ))}
 {items.length === 0 && <div className="opacity-60">No items</div>}
 </div>
 </section>
 );
}
