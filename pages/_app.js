import "../styles/home.css";
import Link from "next/link";
import BottomBar from "../ui/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="header">
        <div className="header-inner" style={{justifyContent:"center"}}>
          <Link href="/"><img src="/dubular-logo.svg" alt="Dubular" style={{height:54,display:"block"}}/></Link>
        </div>
      </header>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
