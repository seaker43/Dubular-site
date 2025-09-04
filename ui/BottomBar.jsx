import Link from "next/link";

const Trace=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12h5l2-4 2 8 2-4h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Star=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m12 3 2.9 6 6.1.9-4.4 4.3 1 6.1L12 17l-5.6 3.3 1-6.1L3 9.9l6.1-.9L12 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);
const Search=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2"/><path d="m20 20-3.6-3.6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const DCoin=()=>(
  <svg width="26" height="26" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="dcg" cx="50%" cy="45%" r="60%"><stop offset="0%" stopColor="#00f5ff"/><stop offset="100%" stopColor="#00ffa3"/></radialGradient>
      <filter id="dg" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#dcg)" filter="url(#dg)" opacity="0.35"/>
    <circle cx="16" cy="16" r="12" fill="none" stroke="url(#dcg)" strokeWidth="2"/>
    <text x="16" y="18.5" dy=".1em" fontFamily="system-ui,Segoe UI,Arial" fontWeight="800" fontSize="12" textAnchor="middle" fill="#001214">D</text>
  </svg>
);
const AccountIcon=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7.5" r="3.2" stroke="currentColor" strokeWidth="2"/><path d="M19 20c0-3.3-3.1-6-7-6s-7 2.7-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const items=[
  {label:"Ranks",   icon:<Trace/>,   href:"#"},
  {label:"Favs",    icon:<Star/>,    href:"#"},
  {label:"Search",  icon:<Search/>,  href:"#"},
  {label:"Wallet",  icon:<DCoin/>,   href:"/wallet"},
  {label:"Account", icon:<AccountIcon/>, href:"/account"},
];

export default function BottomBar(){
  return (
    <nav style={{
      position:"fixed",left:0,right:0,bottom:0,zIndex:50,
      background:"linear-gradient(180deg, rgba(10,15,22,.6), rgba(10,15,22,.95))",
      borderTop:"1px solid #1a2230", backdropFilter:"blur(8px)"
    }}>
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:4,
        alignItems:"center", justifyItems:"center", padding:"10px 12px"
      }}>
        {items.map((it,i)=>(
          <Link key={i} href={it.href} style={{textDecoration:"none", color:"#7efcff"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <div style={{color:"#7efcff"}}>{it.icon}</div>
              <span style={{fontSize:12, marginTop:4}}>{it.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
