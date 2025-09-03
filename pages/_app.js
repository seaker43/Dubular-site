import "../styles/globals.css";
import DubularMark from "../ui/DubularMark";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="site-header">
        <div className="hdr-side" />
        <div className="hdr-center">
          <DubularMark style={{ width: "360px", maxWidth: "72vw" }} />
        </div>
        <nav className="hdr-side hdr-right">
          {/* optional icons/links later */}
        </nav>
      </header>
      <main className="page">
        <Component {...pageProps} />
      </main>
    </>
  );
}
