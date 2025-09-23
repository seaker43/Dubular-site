"use client";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";
import DubularCoin from "@/components/icons/DubularCoin";
const items=[
  {href:"/rank",label:"Rank",icon:DubularCoin},
  {href:"/favorites",label:"Favs",icon:DubularCoin},
  {href:"/",label:"Home",icon:HomeIcon},
  {href:"/search",label:"Find",icon:HomeIcon},
  {href:"/account",label:"Account",icon:HomeIcon},
];
export default function BottomBar(){return(
  <nav className="fixed bottom-0 inset-x-0 bg-black/90 text-white p-2 border-t border-neutral-800 backdrop-blur">
    <ul className="flex justify-around text-xs">
      {items.map(({href,label,icon:Icon})=> (
        <li key={href}>
          <Link href={href} className="flex flex-col items-center gap-1 px-2 py-1">
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);}
