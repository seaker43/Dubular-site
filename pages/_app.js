import "../styles/global.css";
import BottomBar from "../components/home/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Top logo header */}
      <header className="sticky top-0 z-40 h-12 flex items-center px-4 bg-[#080c11]/95 backdrop-blur border-b border-white/10">
        <div className="text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_0_12px_#00e5ff]">
          <span className="text-cyan-300">dub</span><span className="text-white">Ular</span>
        </div>
      </header>

      <Component {...pageProps} />

      {/* Fixed bottom shortcuts */}
      <BottomBar />
    </>
  );
}
