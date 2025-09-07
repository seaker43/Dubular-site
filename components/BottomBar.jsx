import Link from "next/link";
import { Trophy, Heart, Home, Wallet, User } from "lucide-react";
import { useRouter } from "next/router";

const Item = ({ href, icon:Icon, label, active, badge }) => (
  <Link href={href} aria-label={label}
    className="flex flex-col items-center gap-1 flex-1 py-3 text-sm"
  >
    <div
      className={`relative grid place-items-center h-8 w-8 rounded-xl transition-colors
      ${active ? "text-[var(--dub-neon)] bg-[rgba(46,230,184,.10)]" : "text-slate-300/85"}`}
    >
      <Icon size={22} strokeWidth={2.2}/>
      {badge ? (
        <span className="absolute -top-1.5 -right-1.5 grid place-items-center h-5 min-w-5 px-1
          rounded-full text-[11px] font-bold text-slate-900
          bg-[var(--dub-neon)] shadow-[0_0_16px_rgba(46,230,184,.55)]">
          {badge}
        </span>
      ) : null}
    </div>
    <span className={`${active ? "neon-text" : "text-slate-300/90"}`}>{label}</span>
  </Link>
);

export default function BottomBar(){
  const { pathname } = useRouter();
  const is = (p) => pathname === p;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 safe-pb">
      <div className="mx-auto max-w-screen-xl safe-px">
        <div className="card backdrop-blur supports-[backdrop-filter]:bg-black/40
            rounded-2xl shadow-2xl border border-white/5 px-2">
          <div className="flex items-end justify-between">
            <Item href="/ranks" icon={Trophy} label="Rank" active={is("/ranks")} />
            <Item href="/favs" icon={Heart} label="Favs" active={is("/favs")} />
            <Item href="/" icon={Home} label="Home" active={is("/")} />
            <Item href="/wallet" icon={Wallet} label="Wallet" active={is("/wallet")} badge="D" />
            <Item href="/account" icon={User} label="Account" active={is("/account")} />
          </div>
        </div>
      </div>
    </nav>
  );
}
