"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@/components/icons/HomeIcon";
import DubularCoin from "@/components/icons/DubularCoin";
import { Home, Search, Heart, Trophy, User } from "@/components/ui/icons";

const items=[{href:"/rank",label:"Rank",icon:Trophy},{href:"/favorites",label:"Favs",icon:Heart},{href:"/",label:"Home",icon:HomeIcon},{href:"/search",label:"Find",icon:Search},{href:"/account",label:"You",icon:User},];

export default function BottomBar() {
  const pathname = usePathname() ?? "/";
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-black/90 text-white border-t border-neutral-800 backdrop-blur">
      <ul className="mx-auto flex max-w-md w-full justify-around text-[11px] py-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href} className="min-w-[56px] text-center">
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 px-2 ${active ? "text-green-400 drop-shadow-[0_0_8px_#22c55e]" : "text-white/80 hover:text-white"}`}
              >
                <Icon className={`h-6 w-6 ${href === "/" ? "mx-auto" : ""}`} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
