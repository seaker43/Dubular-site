"use client";
import Link from "next/link";
import { Trophy, Star, Home, Search, User } from "lucide-react";

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white border-t border-neutral-800 z-50">
      <ul className="flex justify-around items-center py-2">
        <li>
          <Link href="/rank" className="flex flex-col items-center text-sm">
            <Trophy size={20} />
            <span>Rank</span>
          </Link>
        </li>
        <li>
          <Link href="/favorites" className="flex flex-col items-center text-sm">
            <Star size={20} />
            <span>Favs</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex flex-col items-center text-sm">
            <Home size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/search" className="flex flex-col items-center text-sm">
            <Search size={20} />
            <span>Find</span>
          </Link>
        </li>
        <li>
          <Link href="/account" className="flex flex-col items-center text-sm">
            <User size={20} />
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
