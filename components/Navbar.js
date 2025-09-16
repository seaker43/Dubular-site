// components/Navbar.js
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, User, Wallet, Heart, Trophy } from "lucide-react";

const navItems = [
 { name: "Rank", href: "/rank", icon: Trophy },
 { name: "Favs", href: "/favs", icon: Heart },
 { name: "Home", href: "/", icon: Home },
 { name: "Wallet", href: "/wallet", icon: Wallet, badge: "D" },
 { name: "Account", href: "/account", icon: User },
];

export default function Navbar() {
 const router = useRouter();

 return (
 <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-neon/40 z-50">
 <ul className="flex justify-around items-center h-16">
 {navItems.map((item) => {
 const active = router.pathname === item.href;
 const Icon = item.icon;
 return (
 <li key={item.name} className="flex-1">
 <Link
 href={item.href}
 className="flex flex-col items-center justify-center relative"
 >
 {/* Icon */}
 <Icon
 className={`h-6 w-6 transition-colors ${
 active ? "text-neon drop-shadow-glow" : "text-gray-400"
 }`}
 />

 {/* Badge for Wallet */}
 {item.badge && (
 <span className="absolute -top-1 right-6 text-xs bg-neon text-black font-bold rounded-full .5 shadow-lg">
 {item.badge}
 </span>
 )}

 {/* Label */}
 <span
 className={`mt-1 text-xs ${
 active ? "text-neon font-semibold" : "text-gray-400"
 }`}
 >
 {item.name}
 </span>

 {/* Neon bar indicator */}
 {active && (
 <span className="absolute -bottom-1 h-1 w-8 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]"></span>
 )}
 </Link>
 </li>
 );
 })}
 </ul>
 </nav>
 );
}
