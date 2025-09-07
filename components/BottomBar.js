// components/BottomBar.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const tabs = [
  { href: "/rank",   label: "Rank",    icon: TrophyIcon },
  { href: "/favs",   label: "Favs",    icon: HeartIcon },
  { href: "/",       label: "Home",    icon: HomeIcon },
  { href: "/wallet", label: "Wallet",  icon: WalletIcon, tokenBadge: true },
  { href: "/account",label: "Account", icon: UserIcon },
];

export default function BottomBar() {
  const { pathname } = useRouter();

  const activeIndex = useMemo(() => {
    if (pathname === "/") return 2; // Home is center
    const i = tabs.findIndex(t => t.href === pathname);
    return i === -1 ? 2 : i;
  }, [pathname]);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5
                 bg-[#0b0f14]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/60
                 safe-area-pb"
      aria-label="Bottom navigation"
    >
      <ul className="mx-auto grid max-w-3xl grid-cols-5 gap-1 px-2 py-2">
        {tabs.map(({ href, label, icon: Icon, tokenBadge }, i) => {
          const active = i === activeIndex;
          return (
            <li key={href} className="relative">
              {/* Token badge above Wallet */}
              {tokenBadge && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 token-badge"
                  title="Dubular Token"
                >
                  <DubularToken className="h-4 w-4" />
                </div>
              )}

              <Link
                href={href}
                className={`group flex flex-col items-center justify-center rounded-xl
                            px-2 py-1.5 text-[12px] font-medium transition
                            ${active ? "text-teal-300" : "text-zinc-300/80 hover:text-teal-200"}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  className={`mb-1 h-6 w-6 transition
                              ${active ? "drop-glow" : "opacity-90 group-hover:opacity-100"}`}
                />
                <span className="leading-none">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Neon pager underline */}
      <div className="relative h-2">
        <div
          className="absolute top-0 h-1 w-1/5 rounded-full bg-teal-400 shadow-[0_0_12px_2px_rgba(34,197,194,0.8)] transition-transform duration-300"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
      </div>
    </nav>
  );
}

/* ====== Inline icons (no external deps) ====== */
function HomeIcon(props){return(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10.5V20h14v-9.5" />
  </svg>
);}
function TrophyIcon(props){return(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4Z" />
    <path d="M8 6H4a3 3 0 0 0 3 3" />
    <path d="M16 6h4a3 3 0 0 1-3 3" />
    <path d="M12 11v3" />
    <path d="M8 20h8" />
    <path d="M9 17h6" />
  </svg>
);}
function HeartIcon(props){return(
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21s-7.5-4.6-9.5-8.7C.9 9.6 2.7 6 6.1 6c2 0 3.3 1.1 3.9 2.1.6-1 1.9-2.1 3.9-2.1 3.4 0 5.2 3.6 3.6 6.3C19.5 16.4 12 21 12 21z"/>
  </svg>
);}
function WalletIcon(props){return(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M3 7h15a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
    <path d="M21 10h-6a2 2 0 0 0 0 4h6v-4Z" />
    <path d="M3 7V5a2 2 0 0 1 2-2h10" />
  </svg>
);}
function UserIcon(props){return(
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <circle cx="12" cy="7.5" r="3.5" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);}

/* Dubular token badge (tiny D in a coin) */
function DubularToken(props){return(
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#34d399"/>
        <stop offset="100%" stopColor="#0ea5a4"/>
      </radialGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#g)"/>
    <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeOpacity=".35" strokeWidth="1.2"/>
    <path d="M8.8 8.2h3.9a3.4 3.4 0 1 1 0 6.8H8.8V8.2zM10.6 10v3.2h2.1a1.6 1.6 0 0 0 0-3.2h-2.1z" fill="white"/>
  </svg>
);}
