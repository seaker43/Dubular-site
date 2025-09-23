"use client";
import Link from "next/link";
const items=[{href:"/rank",label:"Rank"},{href:"/favorites",label:"Favs"},{href:"/",label:"Home"},{href:"/search",label:"Find"},{href:"/account",label:"Account"}];
export default function BottomBar(){return(<nav className="fixed bottom-0 inset-x-0 bg-black text-white p-2 border-t border-neutral-800"><ul className="flex justify-around text-sm">{items.map(i=>(<li key={i.href}><Link href={i.href} className="px-2 py-1">{i.label}</Link></li>))}</ul></nav>);} 
