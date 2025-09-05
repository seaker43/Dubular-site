import BodyPad from "./components/BodyPad"
import "../styles/globals.css";
import BottomBar from "../components/BottomBar";
import DubularLogo from "../components/DubularLogo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header style={{
        position:"sticky", top:0, zIndex:60,
        background:"linear-gradient(180deg, rgba(0,20,28,.9), rgba(0,20,28,.55) 85%, rgba(0,0,0,0))",
        borderBottom:"1px solid rgba(0,255,220,.08)",
        padding:"10px 0"
      }}>
        <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{transform:"scale(.78)"}}>
            <DubularLogo size={54}/>
          </div>
        </div>
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <BottomBar />
    </>
  );
}
