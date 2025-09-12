// pages/_app.js
import "../styles/globals.css";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="pt-[88px]"> 
        {/* push content down so it's not hidden behind fixed header */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
