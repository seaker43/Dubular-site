import Link from "next/link";
import { Trophy, Heart, Home, Wallet, User } from "lucide-react";

export default function BottomBar() {
  const links = [
    { href: "/rank", label: "Rank", icon: Trophy },
    { href: "/favs", label: "Favs", icon: Heart },
    { href: "/", label: "Home", icon: Home },
    { href: "/wallet", label: "Wallet", icon: Wallet, badge: "D" },
    { href: "/account", label: "Account", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-neon flex justify-around items-center h-16 z-50">
      {links.map(({ href, label, icon: Icon, badge }) => (
        <Link
          key={href}
          href={href}
          className="flex flex-col items-center justify-center text-gray-400 hover:text-neon transition-colors relative"
        >
          <Icon className="h-6 w-6" />
          {badge && (
            <span className="absolute -top-1 right-2 bg-neon text-black text-xs font-bold px-1.5 py-0.5 rounded-full shadow-[0_0_8px_var(--neon)]">
              {badge}
            </span>
          )}
          <span className="text-xs mt-1">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
