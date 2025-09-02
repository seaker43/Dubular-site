import Link from "next/link"
import "../styles/theme.css"

function AppShell({ children }){
  return (
    <div className="app">
      <header className="nav">
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div className="brand">
            <Link href="/"><span className="logo">dubUlar</span></Link>
          </div>
          <nav className="links" style={{position:"relative"}}>
            <Link href="/streams">Streams</Link>
            <Link href="/leaderboards" style={{marginLeft:18}}>Rankings</Link>
            <Link href="/wallet" style={{marginLeft:18}}>Wallet</Link>
            <Link href="/login" style={{marginLeft:18}} className="btn btn-ghost">Login</Link>
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
      <footer className="footer container">© {new Date().getFullYear()} Dubular</footer>
    </div>
  )
}

export default function MyApp({ Component, pageProps }){
  return <AppShell><Component {...pageProps} /></AppShell>
}
