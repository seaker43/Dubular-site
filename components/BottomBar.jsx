// components/BottomBar.jsx
import Link from "next/link";
import { Trophy, Star, Home, Search, User } from "lucide-react";

export default function BottomBar() {
  return (
    <nav className="navbar">
      <Link href="/rank" className="navbar-item">
        <Trophy size={20} />
        <span>Rank</span>
      </Link>
      <Link href="/favorites" className="navbar-item">
        <Star size={20} />
        <span>Favs</span>
      </Link>
      <Link href="/" className="navbar-item">
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link href="/find" className="navbar-item">
        <Search size={20} />
        <span>Find</span>
      </Link>
      <Link href="/account" className="navbar-item">
        <User size={20} />
        <span>Account</span>
      </Link>
    </nav>
  );
}
