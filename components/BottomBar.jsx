// components/BottomBar.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Search, Star, User, Trophy } from "lucide-react";

const navItems = [
  { href: "/rank", label: "Rank", icon: Trophy },
  { href: "/favs", label: "Favs", icon: Star },
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Find", icon: Search }, // 🔍 New search page
  { href: "/account", label: "Account", icon: User },
];

export default function BottomBar() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-neutral-800 backdrop-blur-md z-50">
      <ul className="flex justify-center items-center">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = router.pathname === href;
          return (
            <li key={href} className="flex-1">
              <Link href={href} className="flex flex-col items-center py-2">
                <Icon
                  className={`h-6 w-6 ${
                    active
                      ? "text-neon-green drop-shadow-[0_0_8px_#00FF00]"
                      : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-xs ${
                    active
                      ? "text-neon-green drop-shadow-[0_0_6px_#00FF00]"
                      : "text-gray-400"
                  }`}
                >
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
