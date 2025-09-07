// components/BottomBar.jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomBar() {
  const router = useRouter();

  const Item = ({ href, active, children }) => (
    <Link href={href} className={`navbar-item ${active ? "active" : ""}`}>
      {children}
    </Link>
  );

  return (
    <nav className="navbar">
      <Item href="/rank" active={router.pathname === "/rank"}>
        <span>🏆</span>
        <span>Rank</span>
      </Item>

      <Item href="/favorites" active={router.pathname === "/favorites"}>
        <span>⭐</span>
        <span>Favs</span>
      </Item>

      <Item href="/" active={router.pathname === "/"}>
        <span>🏠</span>
        <span>Home</span>
      </Item>

      <Item href="/find" active={router.pathname === "/find"}>
        <span>🔍</span>
        <span>Find</span>
      </Item>

      <Item href="/account" active={router.pathname === "/account"}>
        <span>👤</span>
        <span>Account</span>
      </Item>
    </nav>
  );
}
