import "../styles/base.css";
import Logo from "../components/Logo";
export default function App({Component, pageProps}){
  return (
    <>
      <header className="hbar">
        <div className="hrow container">
          <Logo/>
        </div>
      </header>
      <Component {...pageProps}/>
    </>
  );
}
