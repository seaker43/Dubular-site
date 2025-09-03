import "../styles/globals.css";
import { Crown, Heart, Search, Wallet, User } from "lucide-react";

const shortcuts = [
  { label: "Ranks",   href: "/ranks",     Icon: Crown  },
  { label: "Favs",    href: "/favorites", Icon: Heart  },
  { label: "Search",  href: "/search",    Icon: Search },
  { label: "Wallet",  href: "/wallet",    Icon: Wallet },
  { label: "Account", href: "/account",   Icon: User   },
];

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Graffiti logo header (unchanged style/colors/casing) */}
      <header className="sticky top-0 z-40 h-16 flex items-center px-6 bg-[#080c11]/95 backdrop-blur border-b border-white/10">
        <div className="logo-graffiti select-none">
          <span className="logo-cyan text-3xl">dub</span>
          <span className="logo-pinkU text-4xl">U</span>
          <span className="logo-cyan text-3xl">lar</span>
        </div>
      </header>

      <Component {...pageProps} />

      {/* Centered 5-button bottom bar with icons above labels */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 h-16 bg-[#080c11]/95 border-t border-white/10">
        <ul className="mx-auto h-full max-w-[560px] grid grid-cols-5 place-items-center">
          {shortcuts.map(({ label, href, Icon }) => (
            <li key={label} className="h-full w-full">
              <a
                href={href}
                className="h-full w-full flex flex-col items-center justify-center gap-1 text-[11px] font-medium text-cyan-300 hover:text-pink-400 transition"
              >
                <Icon aria-hidden className="icon-glow" size={22} strokeWidth={2.2} />
                <span className="drop-shadow-[0_0_8px_#00e5ff]">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
