import Link from "next/link";
import { useRouter } from "next/router";
import { Trophy, Heart, Home, Wallet, User } from "lucide-react";

const items = [
  { href: "/ranks",   label: "Rank",    icon: Trophy },
  { href: "/favs",    label: "Favs",    icon: Heart  },
  { href: "/",        label: "Home",    icon: Home   },
  { href: "/wallet",  label: "Wallet",  icon: Wallet },
  { href: "/account", label: "Account", icon: User   },
];

export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50">
      {/* neon underbar */}
      <div className="pointer-events-none absolute inset-x-8 -top-2 h-1 rounded-full bg-neon/70 blur-md"></div>

      <div className="mx-3 mb-3 rounded-2xl bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 ring-1 ring-white/5 shadow-[0_0_40px_-10px_var(--neon)]">
        <ul className="grid grid-cols-5">
          {items.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="flex flex-col items-center justify-center gap-1 py-3"
                >
                  <div className="relative grid place-items-center">
                    {/* token badge above Wallet */}
                    {label === "Wallet" && (
                      <span className="absolute -top-3 translate-y-0 -right-2 grid h-6 w-6 place-items-center rounded-full bg-neon/20 ring-1 ring-neon/50 text-[11px] font-semibold text-neon shadow-[0_0_20px_var(--neon)]">
                        D
                      </span>
                    )}
                    <Icon
                      className={[
                        "h-6 w-6 transition-all",
                        active ? "text-neon drop-shadow-[0_0_6px_var(--neon)]" : "text-zinc-300/80 group-hover:text-neon/90",
                      ].join(" ")}
                      strokeWidth={active ? 2.4 : 2}
                    />
                  </div>
                  <span className={active ? "text-neon text-sm glow-xs" : "text-zinc-300/80 text-sm"}>
                    {label}
                  </span>
                  {/* active glow bar */}
                  <span
                    aria-hidden
                    className={[
                      "mt-1 h-1 w-8 rounded-full transition-all",
                      active ? "bg-neon shadow-[0_0_10px_var(--neon)]" : "bg-transparent",
                    ].join(" ")}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
