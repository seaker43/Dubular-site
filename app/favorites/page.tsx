"use client";
export const dynamic="force-dynamic";
const pathname=typeof window!=="undefined"?window.location?.pathname:"";
export const dynamic="force-dynamic";
const pathname = typeof window!=="undefined" ? window.location?.pathname : "";
import { useEffect,useState } from "react";
import ThumbnailCard from "@/components/ThumbnailCard";
export default function FavoritesPage(){const [favorites,setFavorites]=useState<any[]>([]);useEffect(()=>{const s=localStorage.getItem("favorites");if(s){try{setFavorites(JSON.parse(s))}catch{setFavorites([])}}},[]);if(!favorites.length){return <div className="flex items-center justify-center h-screen text-neutral-400">No favorites yet.</div>;}
return(<div className="p-4"><h1 className="mb-4 text-xl font-bold text-cyan-400">Your Favorites</h1><div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">{favorites.map((fav,i)=>(<ThumbnailCard key={i} data={fav}/>))}</div></div>);} 
