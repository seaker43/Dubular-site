import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="sticky top-0 z-40 h-14 flex items-center px-4 bg-[#080c11]/95 backdrop-blur border-b border-white/10">
        <div className="graffiti">
          <span>dub</span>
          <span className="u">U</span>
          <span>lar</span>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
