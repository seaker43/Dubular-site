// components/BottomBar.js
import Link from "next/link";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/trending", label: "Trending" },
  { href: "/recommended", label: "Recommended" },
  { href: "/favs", label: "Favs" },
];

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-neutral-950/90 backdrop-blur border-t border-neutral-800">
      <ul className="grid grid-cols-4 text-sm">
        {tabs.map((t) => (
          <li key={t.href}>
            <Link
              href={t.href}
              className="block text-center py-3 text-neutral-300 hover:text-cyan-300"
            >
              {t.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
