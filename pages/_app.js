import '../styles/home.css';
import BottomBar from "../ui/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="header" style={{marginBottom:"0"}}>
        <div className="header-inner" style={{justifyContent:"center"}}>
          </div>
      </header>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
