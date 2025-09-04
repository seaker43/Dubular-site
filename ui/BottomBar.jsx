export default function BottomBar() {
  const Trace=()=> <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17V7a2 2 0 0 1 2-2h4V3l4 3-4 3V7H6v10h4v-2l4 3-4 3v-2H6a2 2 0 0 1-2-2z"/></svg>;
  const Star=()=> <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z"/></svg>;
  const Search=()=> <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
  const DCoin=()=> (
    <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="dcg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f7ff"/>
          <stop offset="100%" stopColor="#0077ff"/>
        </radialGradient>
        <filter id="dg" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="3"/>
        </filter>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#dcg)" filter="url(#dg)"/>
      <text x="16" y="17.5" dy=".35em" fontFamily="system-ui,Segoe UI,Arial" fontWeight="800" fontSize="11" textAnchor="middle" fill="#fff">D</text>
    </svg>
  );
  const Account=()=> <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M19 21a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3"/></svg>;

  const tabs=[{label:"Ranks",icon:<Trace/>},{label:"Favs",icon:<Star/>},{label:"Search",icon:<Search/>},{label:"Wallet",icon:<DCoin/>},{label:"Account",icon:<Account/>}];

  return (
    <nav style={{position:"fixed",bottom:0,left:0,right:0,display:"flex",justifyContent:"space-around",background:"#0e141b",padding:"10px 0",borderTop:"1px solid #1a2230",zIndex:50}}>
      {tabs.map((t,i)=>(
        <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",color:"#00f7ff"}}>
          {t.icon}
          <span style={{fontSize:"12px"}}>{t.label}</span>
        </div>
      ))}
    </nav>
  );
}
