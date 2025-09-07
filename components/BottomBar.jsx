// components/BottomBar.jsx
import Link from "next/link";
import { Home, Star, Trophy, User, Search } from "lucide-react";

const BottomBar = ({ active }) => {
  const links = [
    { href: "/ranks", icon: Trophy, label: "Rank" },
    { href: "/favs", icon: Star, label: "Favs" },
    { href: "/", icon: Home, label: "Home" },
    { href: "/search", icon: Search, label: "Find" },
    { href: "/account", icon: User, label: "Account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-neutral-900 border-t border-neutral-800 flex justify-around items-center py-2 z-50">
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center text-xs transition-colors ${
            active === href
              ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <Icon className="w-6 h-6 mb-1" />
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default BottomBar;
