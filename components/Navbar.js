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
      {/* guaranteed neon bar */}
      <div className="mx-8 h-1 rounded-full bg-neon/80 shadow-[0_0_16px_var(--neon),0_0_32px_var(--neon)]" />

      <div className="mx-3 mb-3 mt-2 rounded-2xl bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 ring-1 ring-white/5 shadow-[0_0_40px_-10px_var(--neon)]">
        <ul className="grid grid-cols-5">
          {items.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href} className="grid">
                <Link
                  href={href}
                  className="grid place-items-center gap-1 py-3"
                >
                  <div className="relative grid place-items-center">
                    {/* token badge above Wallet */}
                    {label === "Wallet" && (
                      <span className="absolute -top-3 -right-2 grid h-6 w-6 place-items-center rounded-full bg-neon/20 ring-1 ring-neon/50 text-[11px] font-semibold text-neon shadow-[0_0_20px_var(--neon)]">
                        D
                      </span>
                    )}
                    <Icon
                      className={[
                        "h-6 w-6 transition-all",
                        active
                          ? "text-neon drop-shadow-[0_0_6px_var(--neon)]"
                          : "text-zinc-300/80 hover:text-neon/90",
                      ].join(" ")}
                      strokeWidth={active ? 2.4 : 2}
                    />
                  </div>
                  <span
                    className={
                      active ? "text-neon text-sm glow-xs" : "text-zinc-300/80 text-sm"
                    }
                  >
                    {label}
                  </span>
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
