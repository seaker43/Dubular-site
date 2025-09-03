import Link from "next/link";

const Item = ({ href, label }) => (
  <Link
    href={href}
    className="flex flex-col items-center justify-center gap-1 px-2 py-1.5 text-[11px] text-white/80 hover:text-cyan-300 transition"
  >
    <span>{label}</span>
  </Link>
);

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 h-14 border-t border-white/10 bg-[#080c11]/95 backdrop-blur supports-[backdrop-filter]:bg-[#080c11]/70">
      <div className="mx-auto max-w-6xl h-full px-2">
        <div className="grid grid-cols-5 h-full place-items-center">
          <Item href="/ranks" label="Ranks" />
          <Item href="/favs" label="Favs" />
          <Item href="/search" label="Search" />
          <Item href="/wallet" label="Wallet" />
          <Item href="/account" label="Account" />
        </div>
      </div>
    </nav>
  );
}
