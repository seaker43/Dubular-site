import Link from "next/link";
import { useRouter } from "next/router";
import { Trophy, Heart, Home, Search, User } from "lucide-react";

const tabs = [
  { href: "/ranks",  label: "Rank",   icon: Trophy },
  { href: "/favs",   label: "Favs",   icon: Heart  },
  { href: "/",       label: "Home",   icon: Home   },
  { href: "/search", label: "Find",   icon: Search },
  { href: "/account",label: "Account",icon: User   },
];

export default function BottomBar() {
  const { pathname } = useRouter();

  return (
    <nav className="bottom-bar fixed bottom-0 left-0 right-0 z-50">
      <ul className="mx-auto flex w-full max-w-4xl items-center justify-around">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`nav-item ${active ? "active" : ""}`}
                aria-label={label}
              >
                <Icon
                  className={`nav-icon ${active ? "icon-gold-glow" : ""}`}
                  size={20}
                />
                <span className={`nav-label text-[11px] leading-none ${active ? "gold-glow" : "text-neutral-300"}`}>
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
