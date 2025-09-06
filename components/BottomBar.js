export default function BottomBar() {
  const Item = ({ href, emoji, label, active=false }) => (
    <a
      href={href}
      className={
        "flex flex-col items-center justify-center rounded-xl px-3 py-2 text-xs " +
        (active
          ? "text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-500/30"
          : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-500/5")
      }
    >
      <span className="text-xl leading-none">{emoji}</span>
      <span className="mt-1">{label}</span>
    </a>
  );

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-500/30 bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
      <div className="mx-auto max-w-screen-md">
        <div className="grid grid-cols-5 gap-1 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          <Item href="/ranks"  emoji="📊" label="Ranks" />
          <Item href="/search" emoji="🔍" label="Search" />
          <Item href="/"       emoji="🏠" label="Home" active />
          <Item href="/wallet" emoji="💳" label="Wallet" />
          <Item href="/account"emoji="👤" label="Account" />
        </div>
      </div>
    <span className="ml-2 text-[10px] text-neutral-500/70">build: {process.env.NEXT_PUBLIC_BUILD_ID || (typeof window!=="undefined" ? "" : "")}</span></nav>
  );
}
