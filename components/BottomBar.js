import Link from "next/link";
import { useRouter } from "next/router";

/* Simple inline SVG icons (no wallet icon for Wallet tab). */
const Trophy = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...p}>
    <path fill="currentColor" d="M7 4h10a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5h-1a5 5 0 0 1-2 1.73V17h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2.27A5 5 0 0 1 9 13H8A5 5 0 0 1 3 8V7a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1Zm-2 4v.03A3 3 0 0 0 8 11h1V7H5Zm12 0h-4v4h1a3 3 0 0 0 3-3V8Z"/>
  </svg>
);
const Heart = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...p}>
    <path fill="currentColor" d="M12 21s-7-4.35-9.33-7.21C.88 11.69 2 7.5 6 7.5c2.06 0 3.22 1.17 4 2 0 0 1.06-2 4-2 4 0 5.12 4.19 3.33 6.29C19 16.65 12 21 12 21Z"/>
  </svg>
);
const Home = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...p}>
    <path fill="currentColor" d="M12 3 3 10h2v10h5v-6h4v6h5V10h2L12 3Z"/>
  </svg>
);
const User = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...p}>
    <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5A1.5 1.5 0 0 0 4.5 21h15A1.5 1.5 0 0 0 21 19.5C21 16.5 17 14 12 14Z"/>
  </svg>
);

export default function BottomBar() {
  const { pathname } = useRouter();

  const items = [
    { href: "/rank", label: "Rank", icon: <Trophy /> },
    { href: "/favs", label: "Favs", icon: <Heart /> },
    { href: "/", label: "Home", icon: <Home /> },
    // Wallet: **no wallet icon**; only token badge
    { href: "/wallet", label: "Wallet", icon: null, token: true },
    { href: "/account", label: "Account", icon: <User /> },
  ];

  return (
    <nav className="bottom-bar fixed bottom-0 inset-x-0 z-50">
      <div className="mx-auto max-w-screen-md grid grid-cols-5">
        {items.map((it) => {
          const active =
            it.href === "/"
              ? pathname === "/"
              : pathname.startsWith(it.href);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`bottom-item py-3 ${active ? "text-white" : "text-slate-300"}`}
            >
              <div className="relative h-6 flex items-center justify-center">
                {/* render icon unless Wallet (we want only the token badge) */}
                {it.icon}
                {it.token && <span className="token-badge">D</span>}
              </div>
              <span className="text-xs">{it.label}</span>
              <span
                className={`underline block mt-2 h-1 w-11 rounded-full ${
                  active ? "" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
