import Link from "next/link";

const itemCls =
  "flex flex-col items-center justify-center gap-1 flex-1 min-w-0";

const labelCls = "text-[11px] leading-none mt-0.5 truncate";

export default function BottomBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50
                 h-16 px-3
                 bg-[#0b0f14]/95 backdrop-blur
                 border-t border-white/10
                 flex items-center"
      role="navigation"
      aria-label="Quick actions"
    >
      <ul className="w-full flex items-center justify-between gap-1">
        <li className={itemCls}>
          <Link href="/ranks" className="flex flex-col items-center">
            {/* bar chart – yellow */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#facc15">
              <path d="M3 20h18v2H3zM6 10h3v8H6zM11 6h3v12h-3zM16 13h3v5h-3z"/>
            </svg>
            <span className={labelCls}>Ranks</span>
          </Link>
        </li>

        <li className={itemCls}>
          <Link href="/favs" className="flex flex-col items-center">
            {/* heart – red */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#ef4444">
              <path d="M12 21s-7-4.35-9.33-8.24C.42 9.63 2.32 6 5.66 6c1.7 0 3.06.9 3.84 2.14C10.28 6.9 11.64 6 13.34 6c3.34 0 5.24 3.63 3 6.76C19 16.65 12 21 12 21z"/>
            </svg>
            <span className={labelCls}>Favs</span>
          </Link>
        </li>

        <li className={itemCls}>
          <Link href="/search" className="flex flex-col items-center">
            {/* search – neutral */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm11 19-5.1-5.1-1.4 1.4L19.6 22 21 20.6Z"/>
            </svg>
            <span className={labelCls}>Search</span>
          </Link>
        </li>

        <li className={itemCls}>
          <Link href="/wallet" className="flex flex-col items-center">
            {/* wallet – green */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#22c55e">
              <path d="M3 6h14a2 2 0 0 1 2 2v1h2v6h-2v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm16 5h2v4h-2a2 2 0 0 1-2-2 2 2 0 0 1 2-2Z"/>
            </svg>
            <span className={labelCls}>Wallet</span>
          </Link>
        </li>

        <li className={itemCls}>
          <Link href="/account" className="flex flex-col items-center">
            {/* account – cyan (matches brand accent) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#22d3ee">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm7 8a7 7 0 0 0-14 0Z"/>
            </svg>
            <span className={labelCls}>Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
