import Link from "next/link"
import "../styles/theme.css"
import { useRouter } from "next/router"

function IconSearch(){return (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 10 5Zm9.7 13.3-3.4-3.4-1.4 1.4 3.4 3.4a1 1 0 0 0 1.4-1.4Z"/>
  </svg>
)}

function AppChrome({ children }){
  const r = useRouter()
  const is = (p) => r.pathname === p || r.pathname.startsWith(p)

  return (
    <div className="app">
      {/* Top header: logo left, search right */}
      <div className="topbar">
        <Link href="/" className="logo-word">dubUlar</Link>
        <Link href="/search" className="icon-btn" aria-label="Search"><IconSearch/></Link>
      </div>

      <main className="container">{children}</main>

      {/* Bottom navigation */}
      <footer className="bottom-nav">
        <Link href="/" className={is("/") ? "active": ""}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1V10Z"/></svg>
          Home
        </Link>
        <Link href="/streams" className={is("/streams") ? "active": ""}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h7v7H4V4Zm0 9h7v7H4v-7Zm9-9h7v7h-7V4Zm0 9h7v7h-7v-7Z"/></svg>
          Streams
        </Link>
        <Link href="/leaderboards" className={is("/leaderboards") ? "active": ""}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 21H5V9h5v12Zm9 0h-5V5h5v16ZM14 21h-4v-9h4v9Z"/></svg>
          Rankings
        </Link>
        <Link href="/wallet" className={is("/wallet") ? "active": ""}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 7a3 3 0 0 1 3-3h14v4H6v8h14v4H6a3 3 0 0 1-3-3V7Zm18 6a2 2 0 1 1 0 4h-5a2 2 0 1 1 0-4h5Z"/></svg>
          Wallet
        </Link>
      </footer>
    </div>
  )
}

export default function MyApp({ Component, pageProps }){
  return <AppChrome><Component {...pageProps} /></AppChrome>
}
