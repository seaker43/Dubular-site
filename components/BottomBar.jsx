"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, Star, Home, Search, User } from "lucide-react";

export default function BottomBar() {
  const pathname = usePathname();

  const links = [
    { href: "/rank", icon: <Trophy />, label: "Rank" },
    { href: "/favorites", icon: <Star />, label: "Favs" },
    { href: "/", icon: <Home />, label: "Home" },
    { href: "/search", icon: <Search />, label: "Find" },
    { href: "/account", icon: <User />, label: "Account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white flex justify-evenly items-center h-16 border-t border-neutral-800">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center text-xs ${
              active
                ? "text-cyan-400 drop-shadow-[0_0_6px_#0ff] drop-shadow-[0_0_12px_#0ff]"
                : "text-gray-400"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
