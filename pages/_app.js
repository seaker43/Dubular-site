import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="sticky top-0 z-40 h-16 flex items-center px-6 bg-[#080c11]/95 backdrop-blur border-b border-white/10">
        <div className="logo-graffiti select-none">
          <span className="logo-cyan text-3xl">dub</span>
          <span className="logo-pinkU text-4xl">U</span>
          <span className="logo-cyan text-3xl">lar</span>
        </div>
      </header>

      <Component {...pageProps} />

      {/* Bottom bar left as-is */}
      <nav className="fixed bottom-0 left-0 right-0 h-14 bg-[#080c11]/95 border-t border-white/10 flex justify-around items-center text-xs text-white z-40">
        {[
          { label: "Ranks", href: "/ranks" },
          { label: "Favs", href: "/favorites" },
          { label: "Search", href: "/search" },
          { label: "Wallet", href: "/wallet" },
          { label: "Account", href: "/account" },
        ].map((item, i) => (
          <a key={i} href={item.href} className="flex flex-col items-center text-cyan-400 hover:text-pink-500 transition drop-shadow-[0_0_8px_#00e5ff]">
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
