import "../styles/globals.css";
import BottomBar from "../ui/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Top logo header (single source of truth) */}
      <header className="sticky top-0 z-40 h-12 flex items-center px-4 bg-[#080c11]/95 backdrop-blur border-b border-white/10">
        <div className="text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_0_12px_#00e5ff]">
          <span className="text-cyan-300">dub</span>
          <span className="text-white">Ular</span>
        </div>
      </header>

      {/* Page content wrapper with bottom padding so it clears the fixed bar */}
      <div className="min-h-screen pb-20 bg-neutral-950 text-white">
        <Component {...pageProps} />
      </div>

      {/* Fixed bottom shortcuts */}
      <BottomBar />
    </>
  );
}
