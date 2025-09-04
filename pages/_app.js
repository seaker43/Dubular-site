import "../styles/home.css";
import BottomBar from "../ui/BottomBar";
import DubularWordmark from "../ui/DubularWordmark";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="header">
        <div className="header-inner" style={{justifyContent:"center"}}>
          <DubularWordmark />
        </div>
      </header>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
