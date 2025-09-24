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
  <nav className="[data-active=true]:text-[#00ff5b] [data-active=true]:drop-shadow-[0_0_10px_#00ff5b] fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50">
    <ul className="[data-active=true]:text-[#00ff5b] [data-active=true]:drop-shadow-[0_0_10px_#00ff5b] fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50">
      {items.map(({href,label,icon:Icon})=> (
        <li key={href}>
          <Link data-active={pathname===item.href} href={href} className="[data-active=true]:text-[#00ff5b] [data-active=true]:drop-shadow-[0_0_10px_#00ff5b] fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50">
            <Icon className="[data-active=true]:text-[#00ff5b] [data-active=true]:drop-shadow-[0_0_10px_#00ff5b] fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-2 z-50" />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);}
