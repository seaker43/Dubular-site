import Link from "next/link";
import { useRouter } from "next/router";

const Icon = {
  bars: (a={}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...a}>
      <path d="M4 15v4M10 11v8M16 7v12M22 3v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  search: (a={}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...a}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M21 21l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  home: (a={}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...a}>
      <path d="M3 10.5L12 4l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  wallet: (a={}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...a}>
      <rect x="3" y="6" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17" cy="13" r="1.5" fill="currentColor"/>
    </svg>
  ),
  user: (a={}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...a}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 20c1.8-3.3 5-5 8-5s6.2 1.7 8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

export default function BottomBar(){
  const { pathname } = useRouter();
  const items = [
    { href: "/ranks",  label: "Ranks",   icon: Icon.bars },
    { href: "/search", label: "Search",  icon: Icon.search },
    { href: "/",       label: "Home",    icon: Icon.home },
    { href: "/wallet", label: "Wallet",  icon: Icon.wallet },
    { href: "/account",label: "Account", icon: Icon.user },
  ];

  return (
    <nav style={{
      position:"sticky", bottom:0, left:0, right:0,
      backdropFilter:"blur(10px)",
      background:"rgba(5,20,25,.6)",
      borderTop:"1px solid rgba(0,255,220,.1)",
      zIndex:50
    }}>
      <ul style={{
        listStyle:"none", margin:0, padding:"10px 12px",
        display:"flex", justifyContent:"space-around", alignItems:"center",
      }}>
        {items.map((it, i)=>{
          const active = pathname === it.href || (it.href === "/" && pathname === "/index");
          const accent = active ? "#18e27a" : "rgba(180,250,240,.8)";
          const glow = active ? "0 0 18px rgba(0,255,220,.35)" : "none";
          return (
            <li key={i} style={{textAlign:"center", flex:"1 1 0"}}>
              <Link href={it.href} style={{textDecoration:"none", color:accent}}>
                <div style={{
                  width:52, height:52, margin:"0 auto 4px",
                  borderRadius:14, display:"grid", placeItems:"center",
                  boxShadow: glow,
                  background: active ? "radial-gradient(60% 60% at 50% 50%, rgba(0,255,220,.12), rgba(0,40,60,.25))" : "transparent",
                  border: active ? "1px solid rgba(0,255,220,.25)" : "1px solid transparent"
                }}>
                  {it.icon({})}
                </div>
                <div style={{fontSize:12, opacity: .9}}>{it.label}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
