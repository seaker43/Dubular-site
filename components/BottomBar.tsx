"use client";
import Link from "next/link";
import { Crown, Heart, Home, Search, User } from "lucide-react";
import DubularCoin from "@/components/icons/DubularCoin";
const items=[
  {href:"/rank",label:"Rank",icon:DubularCoin},
  {href:"/favorites",label:"Favs",icon:DubularCoin},
  {href:"/",label:"Home",icon:Home},
  {href:"/search",label:"Find",icon:Home},
  {href:"/account",label:"Account",icon:Home},
];
export default function BottomBar(){return(
  <nav className="fixed bottom-0 inset-x-0 bg-black/90 text-white p-2 border-t border-neutral-800 backdrop-blur">
    <ul className="mx-auto flex h-16 max-w-screen-md items-center justify-evenly px-2">
      {items.map(({href,label,icon:Icon})=> (
        <li key={href}>
          <Link href={href} className="mx-auto flex h-16 max-w-screen-md items-center justify-evenly px-2">
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);}
