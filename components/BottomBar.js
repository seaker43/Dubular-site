import Link from "next/link";
import { useRouter } from "next/router";
import { Trophy, Heart, Home, Wallet, User } from "lucide-react";

export default function BottomBar() {
  const router = useRouter();
  const links = [
    { href: "/ranks", label: "Rank", icon: Trophy },
    { href: "/favs", label: "Favs", icon: Heart },
    { href: "/", label: "Home", icon: Home },
    { href: "/wallet", label: "Wallet", icon: Wallet, badge: "D" },
    { href: "/account", label: "Account", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 safe-pb bg-[rgba(12,17,20,0.95)] backdrop-blur-md border-t border-white/5 flex justify-around z-50">
      {links.map(({ href, label, icon: Icon, badge }) => {
        const active = router.pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="relative flex flex-col items-center justify-center flex-1 py-2 text-xs font-medium"
          >
            <div className="relative flex items-center justify-center">
              <Icon
                size={22}
                className={
                  active
                    ? "text-[var(--dub-neon)] drop-shadow-[0_0_8px_var(--dub-neon)]"
                    : "text-gray-400"
                }
              />
              {badge && (
                <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-[var(--dub-neon)] text-black rounded-full px-1.5 shadow-[0_0_8px_var(--dub-neon)]">
                  {badge}
                </span>
              )}
            </div>

            <span
              className={
                "mt-1" +
                (active
                  ? " neon-text drop-shadow-[0_0_6px_var(--dub-neon)]"
                  : " text-gray-400")
              }
            >
              {label}
            </span>

            {/* Neon underline bar for active tab */}
            {active && (
              <span className="pointer-events-none absolute -bottom-1 h-1 w-10 rounded-full bg-[var(--dub-neon)] shadow-[0_0_12px_var(--dub-neon)]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
