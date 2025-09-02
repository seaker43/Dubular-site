import Link from "next/link";
import { useRouter } from "next/router";
import { Trophy, Heart, Search, Wallet, User } from "lucide-react";

export default function BottomNav() {
  const { pathname } = useRouter();
  const items = [
    { href: "/leaderboards", label: "Ranks",  icon: Trophy },
    { href: "/favorites",    label: "Favs",   icon: Heart  },
    { href: "/search",       label: "Search", icon: Search },
    { href: "/wallet",       label: "Wallet", icon: Wallet },
    { href: "/account",      label: "Account",icon: User   },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((it) => {
        const Icon = it.icon;
        const active = pathname === it.href || (it.href !== "/" && pathname.startsWith(it.href));
        return (
          <Link key={it.href} href={it.href} className={`bn-item ${active ? "active" : ""}`}>
            <Icon className="bn-icon" />
            <span className="bn-label">{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
