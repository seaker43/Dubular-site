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
  <nav className="fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50">
    <ul className="fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50">
      {items.map(({href,label,icon:Icon})=> (
        <li key={href}>
          <Link href={href} className="fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50">
            <Icon className="fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50" />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);}
