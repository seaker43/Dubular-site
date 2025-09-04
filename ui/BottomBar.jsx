import Link from "next/link";
const BarIcon=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="12" width="3" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="10.5" y="7" width="3" height="13" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="4" width="3" height="16" rx="1.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const Star=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.9 5.9 6.1.9-4.4 4.4 1 6.2L12 17l-5.6 3.4 1-6.2L3 9.8l6.1-.9L12 3z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
);
const Search=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2"/><path d="M15 15l5 5" stroke="currentColor" strokeWidth="2"/></svg>
);
const DCoin=()=>(
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="dc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#00f7ff"/><stop offset="1" stopColor="#00ffd7"/></linearGradient>
      <filter id="dg"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#dc)" opacity=".22" filter="url(#dg)"/>
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
    <text x="16" y="18.5" dy=".35em" fontFamily="system-ui,Arial" fontWeight="800" fontSize="12" textAnchor="middle" fill="#fff">D</text>
  </svg>
);
const Account=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2"/></svg>
);
const tabs=[
  {label:"Ranks",  icon:<BarIcon/>,   href:"#"},
  {label:"Search", icon:<Search/>,   href:"#"},
  {label:"Wallet", icon:<DCoin/>,    href:"/wallet"},
  {label:"Account",icon:<Account/>,  href:"/account"},
];
export default function BottomBar(){
  return (
    <nav className="bottom-nav">
      {tabs.map((t,i)=>(
        <Link key={i} href={t.href} className="bottom-tab">
          <span className="icon">{t.icon}</span>
          <span className="label">{t.label}</span>
        </Link>
      ))}
    </nav>
  );
}
