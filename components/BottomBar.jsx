// components/BottomBar.jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomBar() {
  const router = useRouter();

  const Item = ({ href, active, icon, label }) => (
    <Link
      href={href}
      className={`navbar-item flex flex-col items-center ${
        active ? "active text-white" : "text-neutral-400"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-xs">{label}</span>
    </Link>
  );

  return (
    <nav className="navbar">
      <Item
        href="/rank"
        active={router.pathname === "/rank"}
        icon="🏆"
        label="Rank"
      />
      <Item
        href="/favorites"
        active={router.pathname === "/favorites"}
        icon="⭐"
        label="Favs"
      />
      <Item
        href="/"
        active={router.pathname === "/"}
        icon="🏠"
        label="Home"
      />
      <Item
        href="/find"
        active={router.pathname === "/find"}
        icon="🔍"
        label="Find"
      />
      <Item
        href="/account"
        active={router.pathname === "/account"}
        icon="👤"
        label="Account"
      />
    </nav>
  );
}
