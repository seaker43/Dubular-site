export default function Logo() {
  return (
    <div
      aria-label="Dubular"
      className="select-none"
      style={{
        display: 'inline-block',
        fontWeight: 800,
        letterSpacing: '0.06em',
        fontSize: '20px',
        color: '#00ffff',
        filter: 'drop-shadow(0 0 8px rgba(0,255,255,.75)) drop-shadow(0 0 18px rgba(0,204,204,.35))'
      }}
    >
      <span style={{opacity:.95}}>dub</span>
      <span style={{opacity:1}}>U</span>
      <span style={{opacity:.95}}>lar</span>
    </div>
  );
}
