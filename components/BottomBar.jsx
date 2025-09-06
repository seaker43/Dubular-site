export default function BottomBar() {
  const items = [
    { href: "/ranks",   label: "Ranks",   icon: "📊" },
    { href: "/search",  label: "Search",  icon: "🔎" },
    { href: "/",        label: "Home",    icon: "🏠" },
    { href: "/wallet",  label: "Wallet",  icon: "💳" },
    { href: "/account", label: "Account", icon: "👤" },
  ];
  return (
    <nav className="fixed left-0 right-0 bottom-[max(env(safe-area-inset-bottom),0px)] z-50 w-full border-t border-green-400/30 bg-neutral-900/80 backdrop-blur">
      <ul className="mx-auto grid max-w-screen-sm grid-cols-5 p-2 text-green-400">
        {items.map((it) => (
          <li key={it.href} className="flex items-center justify-center">
            <a href={it.href} className="flex flex-col items-center gap-1 rounded-2xl px-3 py-2 hover:text-green-300 active:scale-95">
              <span className="text-xl leading-none">{it.icon}</span>
              <span className="text-[11px]">{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
