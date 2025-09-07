import Link from "next/link";
import { Trophy, Heart, Home, Wallet, User } from "lucide-react";

const Item = ({ href, icon: Icon, label, active }) => (
  <Link
    href={href}
    className={`flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs ${
      active ? "text-[color:var(--neon)]" : "text-white/70"
    }`}
  >
    <Icon className={`h-6 w-6 ${active ? "drop-shadow-[0_0_10px_rgba(54,242,185,.6)]" : ""}`} />
    <span>{label}</span>
    {active && <span className="mt-1 h-1 w-16 rounded-full bg-[color:var(--neon)]/90" />}
  </Link>
);

export default function BottomNav({ active = "home" }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 border-t border-white/5 bg-[#0a0f13]/95 backdrop-blur-lg">
      <div className="mx-auto grid max-w-xl grid-cols-5 py-2">
        <Item href="/ranks" icon={Trophy} label="Rank" active={active==="ranks"} />
        <Item href="/favs" icon={Heart} label="Favs" active={active==="favs"} />
        <Item href="/" icon={Home} label="Home" active={active==="home"} />
        <div className="relative">
          {/* Dubular token chip ABOVE the Wallet shortcut */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[color:var(--neon)] text-[#0a0f13] shadow-glow">
            D
          </div>
          <Item href="/wallet" icon={Wallet} label="Wallet" active={active==="wallet"} />
        </div>
        <Item href="/account" icon={User} label="Account" active={active==="account"} />
      </div>
    </nav>
  );
}
