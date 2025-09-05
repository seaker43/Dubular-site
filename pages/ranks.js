export default function Ranks() {
  const demo = [
    { user: 'StreamerA', hours: 120 },
    { user: 'StreamerB', hours: 100 },
    { user: 'StreamerC', hours: 95 },
  ];
  return (
    <div className="page">
      <h1 className="title">Leaderboard</h1>
      <ul style={{marginTop:'12px',padding:0,listStyle:'none'}}>
        {demo.map((r,i)=>(
          <li key={i} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
            <span>{i+1}. {r.user}</span>
            <span>{r.hours} hrs</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
