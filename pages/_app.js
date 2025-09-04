import '../styles/home.css';
import DubularLogo from "../ui/DubularLogo";
import BottomBar from "../ui/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header style={{position:"sticky",top:0,zIndex:999,backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",background:"rgba(6,14,20,0.35)",border:"1px solid rgba(0,255,255,0.08)",boxShadow:"0 8px 30px rgba(0,0,0,0.35)",borderRadius:"16px",padding:"10px 18px",margin:"8px auto 18px",maxWidth:"92%"}}>
        <div className="header-inner" style={{display:"flex",justifyContent:"center",padding:"10px 0"}}><DubularLogo /></div>
          </header>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
