// components/FeaturedLoopHero.jsx
import { useEffect, useState } from 'react';

const TABS = [
 { key: "gaming", label: "Gaming", src: "/thumbnails/trending1.jpg" },
 { key: "irl", label: "IRL", src: "/thumbnails/trending2.jpg" },
 { key: "music", label: "Music", src: "/thumbnails/trending3.jpg" },
 { key: "pod", label: "Podcast", src: "/thumbnails/trending4.jpg" },
];

export default function FeaturedLoopHero() {
 const [tab, setTab] = useState(TABS[0].key);
 const [glow, setGlow] = useState("featured-glow-pink");

 useEffect(() => {
 const id = setInterval(() => {
 setTab((prev) => {
 const idx = TABS.findIndex((t) => t.key === prev);
 const next = TABS[(idx + 1) % TABS.length].key;
 return next;
 });
 setGlow((g) =>
 g === "featured-glow-pink" ? "featured-glow-blue" : "featured-glow-pink"
 );
 }, 3500);
 return () => clearInterval(id);
 }, []);

 const active = TABS.find((t) => t.key === tab) || TABS[0];

 return (
 <section className={`featured-hero ${glow} full-bleed mt-0`}>
 <img
 src={active.src}
 alt={active.label}
 className="w-full h-full object-cover"
 />

 {/* bottom gradient + tab buttons */}
 <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/60" />
 <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-2 pointer-events-auto">
 {TABS.map((t) => (
 <button
 key={t.key}
 onClick={() => setTab(t.key)}
 className={` py-1 rounded-lg text-sm transition ${
 t.key === tab
 ? "bg-black/80 ring-1 ring-white/20"
 : "bg-black/50 hover:bg-black/60"
 }`}
 >
 {t.label}
 </button>
 ))}
 </div>
 </section>
 );
}
