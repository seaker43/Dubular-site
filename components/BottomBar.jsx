export default function BottomBar(){
  const tabs=[
    {label:"Ranks",  icon:"🏆", href:"#"},
    {label:"Favs",   icon:"⭐", href:"#"},
    {label:"Search", icon:"🔎", href:"#"},
    {label:"Wallet", icon:"👛", href:"#"},
    {label:"Account",icon:"👤", href:"#"},
  ];
  return (
    <nav className="bbar">
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
