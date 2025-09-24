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
  <nav className="flex flex-col items-center text-xs hover:text-brand-cyan active:drop-shadow-[0_0_8px_#0f0]">
    <ul className="flex flex-col items-center text-xs hover:text-brand-cyan active:drop-shadow-[0_0_8px_#0f0]">
      {items.map(({href,label,icon:Icon})=> (
        <li key={href}>
          <Link href={href} className="flex flex-col items-center text-xs hover:text-brand-cyan active:drop-shadow-[0_0_8px_#0f0]">
            <Icon className="flex flex-col items-center text-xs hover:text-brand-cyan active:drop-shadow-[0_0_8px_#0f0]" />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);}
