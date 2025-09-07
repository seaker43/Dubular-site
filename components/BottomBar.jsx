// components/BottomBar.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import { Trophy, Star, Home, Search, User } from "lucide-react";

export default function BottomBar() {
  const router = useRouter();

  const Item = ({ href, icon: Icon, label }) => {
    const active = router.pathname === href;
    return (
      <Link
        href={href}
        className={`navbar-item flex flex-col items-center ${
          active ? "text-white" : "text-neutral-400"
        }`}
        aria-label={label}
      >
        <Icon size={20} strokeWidth={2} className="leading-none" />
        <span className="text-xs mt-0.5">{label}</span>
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <Item href="/rank" icon={Trophy} label="Rank" />
      <Item href="/favorites" icon={Star} label="Favs" />
      <Item href="/" icon={Home} label="Home" />
      <Item href="/find" icon={Search} label="Find" />
      <Item href="/account" icon={User} label="Account" />
    </nav>
  );
}
