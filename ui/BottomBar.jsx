import Link from "next/link";

const Item = ({ href, label }) => (
  <Link
    href={href}
    className="flex flex-col items-center justify-center gap-1 px-3 py-1.5 text-[11px] text-white/80 hover:text-cyan-300 transition"
  >
    <span className="h-1 w-1 rounded-full bg-white/50 opacity-0 group-hover:opacity-100"></span>
    <span>{label}</span>
  </Link>
);

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 h-14 border-t border-white/10 bg-[#080c11]/95 backdrop-blur supports-[backdrop-filter]:bg-[#080c11]/70">
      <div className="mx-auto max-w-6xl h-full px-4">
        <div className="grid grid-cols-4 h-full place-items-center">
          <Item href="/" label="Home" />
          <Item href="/streams" label="Live" />
          <Item href="/search" label="Search" />
          <Item href="/account" label="Account" />
        </div>
      </div>
    </nav>
  );
}
