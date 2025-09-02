import '../styles/global.css';
import Logo from '../components/ui/Logo';
import BottomNav from '../components/ui/BottomNav';

export default function App({ Component, pageProps }) {
  return (
    <div className="app">
      <header className="nav" style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'12px 14px', borderBottom:'1px solid rgba(255,255,255,.06)',
        background:'rgba(5,12,18,.92)', position:'sticky', top:0, zIndex:30
      }}>
        <Logo />
        <span style={{width:28}} />
      </header>

      <main className="container" style={{ paddingBottom:'90px' }}>
        <Component {...pageProps} />
      </main>

      <BottomNav />
    </div>
  );
}
