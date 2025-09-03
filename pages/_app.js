import "../styles/base.css";
export default function App({Component, pageProps}){
  return (
    <>
      <header className="hbar">
        <div className="hrow container">
          <DubularMark />
        </div>
      </header>
      <Component {...pageProps}/>
    </>
  );
}
