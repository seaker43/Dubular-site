import "../styles/globals.css";
import Logo from "../ui/Logo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="sticky top-0 z-40 h-16 flex items-center px-6 bg-[#080c11]/95 backdrop-blur border-b border-white/10">
        <Logo />
      </header>
      <Component {...pageProps} />
    </>
  );
}
