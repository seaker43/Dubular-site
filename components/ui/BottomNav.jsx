import Link from "next/link";
import { useRouter } from "next/router";

function Icon({ name, className="" }) {
  const p = { fill: "currentColor", stroke: "currentColor", strokeWidth: 1.5 };
  switch (name) {
    case "trophy":     return (<svg className={className} viewBox="0 0 24 24"><path {...p} d="M6 4h12v2a4 4 0 0 0 4 4v1a7 7 0 0 1-7 7h-2v3h3v2H8v-2h3v-3H9a7 7 0 0 1-7-7V10a4 4 0 0 0 4-4V4Z"/><path {...p} d="M6 4H3v2a3 3 0 0 0 3 3V4Zm12 0h3v2a3 3 0 0 1-3 3V4Z"/></svg>);
    case "heart":      return (<svg className={className} viewBox="0 0 24 24"><path {...p} d="M12 21s-7-4.35-9.5-8A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 7c-2.5 3.65-9.5 8-9.5 8Z"/></svg>);
    case "search":     return (<svg className={className} viewBox="0 0 24 24"><circle {...p} cx="11" cy="11" r="7"/><path {...p} d="m20 20-3.5-3.5"/></svg>);
    case "wallet":     return (<svg className={className} viewBox="0 0 24 24"><rect {...p} x="2" y="6" width="20" height="12" rx="3"/><path {...p} d="M16 12h4v4h-4z"/></svg>);
    case "user":       return (<svg className={className} viewBox="0 0 24 24"><circle {...p} cx="12" cy="8" r="4"/><path {...p} d="M4 20a8 8 0 0 1 16 0"/></svg>);
    default: return null;
  }
}

export default function BottomNav() {
  const { pathname } = useRouter();
  const items = [
    { href: "/leaderboards", label: "Ranks",  icon: "trophy" },
    { href: "/favorites",    label: "Favs",   icon: "heart"  },
    { href: "/search",       label: "Search", icon: "search" },
    { href: "/wallet",       label: "Wallet", icon: "wallet" },
    { href: "/account",      label: "Account",icon: "user"   },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((it) => {
        const active = pathname === it.href || (it.href !== "/" && pathname.startsWith(it.href));
        return (
          <Link key={it.href} href={it.href} className={`bn-item ${active ? "active" : ""}`}>
            <Icon name={it.icon} className="bn-icon" />
            <span className="bn-label">{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
