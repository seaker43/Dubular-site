// pages/find.js
import Head from "next/head";
import MediaRow from "../components/MediaLoopRow";

const CATS = [
 {
 title: "Trending",
 items: [
 { id: "tr1", title: "LoFi #1", src: "/thumbnails/trending/1.jpg" },
 { id: "tr2", title: "LoFi #2", src: "/thumbnails/trending/2.jpg" },
 { id: "tr3", title: "LoFi #3", src: "/thumbnails/trending/3.jpg" },
 { id: "tr4", title: "LoFi #4", src: "/thumbnails/trending/4.jpg" },
 { id: "tr5", title: "LoFi #5", src: "/thumbnails/trending/5.jpg" },
 ],
 },
 {
 title: "Recommended",
 items: [
 { id: "re1", title: "Chill Beats", src: "/thumbnails/recommended/1.jpg" },
 { id: "re2", title: "Study Flow", src: "/thumbnails/recommended/2.jpg" },
 { id: "re3", title: "Night Drive", src: "/thumbnails/recommended/3.jpg" },
 { id: "re4", title: "Focus Core", src: "/thumbnails/recommended/4.jpg" },
 { id: "re5", title: "Ambient Set", src: "/thumbnails/recommended/5.jpg" },
 ],
 },
 {
 title: "Most Watched",
 items: [
 { id: "mw1", title: "Synthwave", src: "/thumbnails/most-watched/1.jpg" },
 {
 id: "mw2",
 title: "Vapor Dreams",
 src: "/thumbnails/most-watched/2.jpg",
 },
 {
 id: "mw3",
 title: "Retro Night",
 src: "/thumbnails/most-watched/3.jpg",
 },
 { id: "mw4", title: "Lounge FM", src: "/thumbnails/most-watched/4.jpg" },
 { id: "mw5", title: "Night Owl", src: "/thumbnails/most-watched/5.jpg" },
 ],
 },
 {
 title: "Most Liked",
 items: [
 { id: "ml1", title: "Deep Focus", src: "/thumbnails/most-liked/1.jpg" },
 { id: "ml2", title: "Lo-Key", src: "/thumbnails/most-liked/2.jpg" },
 { id: "ml3", title: "Calm Loop", src: "/thumbnails/most-liked/3.jpg" },
 { id: "ml4", title: "Soft Neon", src: "/thumbnails/most-liked/4.jpg" },
 { id: "ml5", title: "City Rain", src: "/thumbnails/most-liked/5.jpg" },
 ],
 },
 {
 title: "Biggest Grinders",
 items: [
 { id: "bg1", title: "24/7 Loops", src: "/thumbnails/grinders/1.jpg" },
 { id: "bg2", title: "No Breaks", src: "/thumbnails/grinders/2.jpg" },
 { id: "bg3", title: "Always On", src: "/thumbnails/grinders/3.jpg" },
 { id: "bg4", title: "Night Shift", src: "/thumbnails/grinders/4.jpg" },
 { id: "bg5", title: "Grinding", src: "/thumbnails/grinders/5.jpg" },
 ],
 },
];

export default function Find() {
 return (
 <>
 <Head>
 <title>Find • dubUlar</title>
 </Head>

 {/* Search bar */}
 <div className="mt-3 mb-6">
 <div className="w-full h-12 rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 backdrop-blur flex items-center">
 <svg
 aria-hidden="true"
 viewBox="0 0 24 24"
 className="w-5 h-5 text-neutral-400 mr-2"
 >
 <path
 fill="currentColor"
 d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
 />
 </svg>
 <input
 type="text"
 placeholder="Search titles..."
 className="bg-transparent outline-none text-white placeholder:text-neutral-400 w-full"
 />
 </div>
 </div>

 {/* Rows */}
 <div className="space-y-8">
 {CATS.map((c) => (
 <MediaRow key={c.title} title={c.title} items={c.items} />
 ))}
 </div>
 </>
 );
}

export const config = { runtime: 'edge' };
