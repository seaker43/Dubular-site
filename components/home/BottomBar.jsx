import Link from "next/link";

const Item = ({ href, label, icon }) => (
  <li className="flex-1 flex flex-col items-center justify-center text-center">
    <Link href={href} className="flex flex-col items-center justify-center">
      {icon}
      <span className="text-[11px] leading-3 mt-1 text-slate-200">{label}</span>
    </Link>
  </li>
);

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 h-16 bg-[#0b0f14]/95 backdrop-blur border-t border-white/10 shadow-[0_-6px_12px_-6px_rgba(0,0,0,0.5)]">
      <ul className="flex items-center justify-around h-full px-2">
        <Item href="/ranks" label="Ranks" icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#facc15" aria-hidden>
            <path d="M4 13h3v7H4v-7Zm6-6h3v13h-3V7Zm6 3h3v10h-3V10Z"/>
          </svg>
        }/>
        <Item href="/favs" label="Favs" icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ef4444" aria-hidden>
            <path d="M12 21s-7-4.534-9.5-7.5A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9.5 8.5C19 16.466 12 21 12 21Z"/>
          </svg>
        }/>
        <Item href="/search" label="Search" icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#e5e7eb" aria-hidden>
            <path d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm9.7 13.3-3.4-3.4-1.4 1.4 3.4 3.4a1 1 0 0 0 1.4-1.4Z"/>
          </svg>
        }/>
        <Item href="/wallet" label="Wallet" icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#22c55e" aria-hidden>
            <path d="M3 6h15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm15 7h-3a2 2 0 1 0 0 4h3a2 2 0 1 0 0-4Z"/>
          </svg>
        }/>
        <Item href="/account" label="Account" icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#18e27a" aria-hidden>
            <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"/>
          </svg>
        }/>
      </ul>
    </nav>
  );
}
