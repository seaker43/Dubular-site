"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
type Fav = { id: string; title: string; thumb: string };
export default function FavoritesPage() {
  const [items, setItems] = useState<Fav[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites") || "[]";
      const arr = JSON.parse(raw);
      setItems(arr.map((x:any,i:number)=>({ id:String(x.id??i), title:String(x.title??x.name??"Untitled"), thumb:String(x.thumb??x.image??x.poster??x.thumbnail??"") })));
    } catch { setItems([]); }
  }, []);
  if (!items.length) {
    return (<main className="px-4 py-10"><h1 className="text-4xl font-extrabold text-cyan-300 text-center mb-2">Your Favorites</h1><p className="text-neutral-400 text-center">You haven’t added any favorites yet.</p></main>);
  }
  return (
    <main className="px-4 pb-12">
      <h1 className="text-4xl font-extrabold text-cyan-300 text-center my-6">Your Favorites</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item)=>(
          <article key={item.id} className="group relative overflow-hidden rounded-xl bg-neutral-900/80 ring-1 ring-neutral-800 hover:ring-cyan-400/60 shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_8px_24px_rgba(0,0,0,0.5)] transition">
            <div className="relative w-full aspect-[2/3]">
              <Image src={item.thumb || "/placeholder.png"} alt={item.title} fill sizes="(max-width:768px) 50vw, 20vw" className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="p-3"><p className="text-sm font-semibold text-white text-center line-clamp-2">{item.title}</p></div>
          </article>
        ))}
      </section>
    </main>
  );
}
