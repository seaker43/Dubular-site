import '../styles/home.css';
import BottomBar from "../ui/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header style={{backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",background:"rgba(6,14,20,0.35)",border:"1px solid rgba(0,255,255,0.08)",boxShadow:"0 8px 30px rgba(0,0,0,0.35)",borderRadius:"12px",padding:"8px 16px",margin:"8px auto",maxWidth:"90%"}}>
        <div className="header-inner" style={{justifyContent:"center"}}>
          </div>
      </header>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
