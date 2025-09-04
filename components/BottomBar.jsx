export default function BottomBar(){
  const tabs=[
    {label:"Ranks",  icon:"🏆", href:"#"},
    {label:"Favs",   icon:"⭐", href:"#"},
    {label:"Search", icon:"🔎", href:"#"},
    {label:"Wallet", icon:"👛", href:"#"},
    {label:"Account",icon:"👤", href:"#"},
  ];
  return (
    <nav className="bbar"><button className="fab-home" aria-label="Home" onClick={()=>location.href="/"}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 12 9-8 9 8"></path><path d="M9 22V12h6v10"></path>
          </svg>
        </button>
      <div className="bgrid container" style={{padding:"10px 12px"}}>
        {tabs.map((t,i)=>(
          <a key={i} href={t.href} className={"bbtn"+(i===0?" active":"")}>
            <div className="ic" aria-hidden>{t.icon}</div>
            <span>{t.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
