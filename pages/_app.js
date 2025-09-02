import Link from "next/link"
import "../styles/theme.css"
import { useRouter } from "next/router"

function AppShell({ children }){
  const router = useRouter()
  const active = (path) => router.pathname.startsWith(path)

  return (
    <div className="app">
      <header className="nav">
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div className="brand">
            <Link href="/"><span className="logo">dubUlar</span></Link>
          </div>
        </div>
      </header>

      <main className="container" style={{paddingBottom:"70px"}}>
        {children}
      </main>

      <footer className="bottom-nav">
        <Link href="/" className={active("/") ? "active" : ""}>
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 9.75L12 3l9 6.75V21a.75.75 0 0 1-.75.75h-5.25v-6h-6v6H3.75A.75.75 0 0 1 3 21V9.75Z"/></svg>
          Home
        </Link>
        <Link href="/streams" className={active("/streams") ? "active" : ""}>
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h7v7H4V4Zm0 9h7v7H4v-7Zm9-9h7v7h-7V4Zm0 9h7v7h-7v-7Z"/></svg>
          Streams
        </Link>
        <Link href="/leaderboards" className={active("/leaderboards") ? "active" : ""}>
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 21H5V9h4v12Zm5-12h-4v12h4V9Zm5 0h-4v12h4V9Z"/></svg>
          Rankings
        </Link>
        <Link href="/wallet" className={active("/wallet") ? "active" : ""}>
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 6a3 3 0 0 1 3-3h15v3H6v12h15v3H6a3 3 0 0 1-3-3V6Zm18 5a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4h4Z"/></svg>
          Wallet
        </Link>
      </footer>
    </div>
  )
}

export default function MyApp({ Component, pageProps }){
  return <AppShell><Component {...pageProps} /></AppShell>
}
