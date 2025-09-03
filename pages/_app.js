import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Top logo header */}
      <header className="sticky top-0 z-40 h-14 flex items-center px-6 bg-[#080c11]/95 backdrop-blur border-b border-white/10">
        <div className="flex items-center gap-1 font-extrabold tracking-wide">
          <span className="text-cyan-400 text-3xl drop-shadow-[0_0_12px_#00e5ff] font-[bubblegum-sans]">dub</span>
          <span className="text-pink-500 text-4xl drop-shadow-[0_0_15px_#ff4dff] font-[bubblegum-sans]">U</span>
          <span className="text-cyan-400 text-3xl drop-shadow-[0_0_12px_#00e5ff] font-[bubblegum-sans]">lar</span>
        </div>
      </header>

      <Component {...pageProps} />

      {/* Fixed BottomBar shortcuts */}
      <nav className="fixed bottom-0 left-0 right-0 h-14 bg-[#080c11]/95 border-t border-white/10 flex justify-around items-center text-xs text-white z-40">
        {[
          { label: "Ranks", href: "/ranks" },
          { label: "Favs", href: "/favorites" },
          { label: "Search", href: "/search" },
          { label: "Wallet", href: "/wallet" },
          { label: "Account", href: "/account" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex flex-col items-center text-cyan-400 hover:text-pink-500 transition drop-shadow-[0_0_8px_#00e5ff]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
