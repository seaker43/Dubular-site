import Link from "next/link";
import { useRouter } from "next/router";

function Item({ href, label, children }) {
  const { pathname } = useRouter();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={[
        "flex flex-col items-center justify-center gap-1 px-4 py-1 rounded-2xl transition-all",
        active ? "text-neon shadow-neonLg bg-black/30" : "text-white/70 hover:text-neon"
      ].join(" ")}
    >
      <span aria-hidden className="text-2xl leading-none drop-shadow-[0_0_6px_rgba(24,226,122,.45)]">{children}</span>
      <span className="text-sm">{label}</span>
    </Link>
  );
}

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[1000] w-full h-[72px] bg-[#071612]/90 backdrop-blur border-t border-[rgba(24,226,122,.25)] shadow-[0_-2px_10px_rgba(24,226,122,.18)]">
      <div className="mx-auto max-w-screen-xl h-full flex items-center justify-around px-2">
        <Item href="/ranks"  label="Ranks">📊</Item>
        <Item href="/search" label="Search">🔍</Item>
        <Item href="/"       label="Home">🏠</Item>
        <Item href="/wallet" label="Wallet">💳</Item>
        <Item href="/account"label="Account">👤</Item>
      </div>
    </nav>
  );
}
