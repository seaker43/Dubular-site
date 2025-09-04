import '../styles/home.css';
import DubularLogo from "../ui/DubularLogo";
import BottomBar from "../ui/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header style={{position:"sticky",top:0,zIndex:100,backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",background:"rgba(5,13,20,0.30)",border:"1px solid rgba(0,255,255,0.08)",boxShadow:"0 6px 24px rgba(0,0,0,0.32)",borderRadius:"14px",padding:"6px 12px",margin:"6px auto 12px",maxWidth:"92%"}}>
        <div className="header-inner" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                 <div style={{transform:"scale(0.84)",transformOrigin:"center"}}><DubularLogo /></div>
               </div>
          </header>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
