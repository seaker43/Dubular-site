import Link from "next/link";
import { useRouter } from "next/router";

const tabs = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/streams", label: "Streams", icon: "📺" },
  { href: "/leaderboards", label: "Rankings", icon: "🏆" },
  { href: "/wallet", label: "Wallet", icon: "👛" },
];

export default function BottomNav() {
  const { pathname } = useRouter();
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Primary">
      {tabs.map(t => {
        const active = pathname === t.href;
        return (
          <Link key={t.href} href={t.href} className={`tab ${active ? "active" : ""}`}>
            <span className="tab-ico" aria-hidden>{t.icon}</span>
            <span className="tab-label">{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
