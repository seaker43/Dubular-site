export default function DubularLogo({width=520,height=120}) {
  // Bubble wordmark with cyan streak across DUB & LAR and a huge glowing U.
  return (
    <svg width={width} height={height} viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dubular">
      <defs>
        <linearGradient id="streak" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#00f7ff"/>
          <stop offset="50%" stopColor="#35f2ff"/>
          <stop offset="100%" stopColor="#00e5ff"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="Uglow">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <!-- pill behind logo -->
      <rect x="8" y="10" rx="22" width="504" height="100" fill="url(#bg)" opacity="0.0"/>
      <!-- DUB (bubble) -->
      <text x="75" y="75" textAnchor="middle"
            style={{fontFamily:"system-ui, Segoe UI, Arial", fontWeight:900, fontSize:42, letterSpacing:"6px",
                    fill:"url(#streak)", stroke:"#0af7ff", strokeWidth:1.2, filter:"url(#glow)"}}>
        DUB
      </text>
      <!-- Huge U -->
      <g transform="translate(250,0)">
        <path d="M 0 36 a 1 1 0 0 1 70 0 v 14 a 35 35 0 0 1 -70 0 z"
              fill="none" stroke="#00ffd7" strokeWidth="12" strokeLinecap="round" filter="url(#Uglow)"/>
        <path d="M 0 36 a 1 1 0 0 1 70 0 v 14 a 35 35 0 0 1 -70 0 z"
              fill="none" stroke="#072a2f" strokeWidth="6" strokeLinecap="round"/>
      </g>
      <!-- LAR (bubble) -->
      <text x="438" y="75" textAnchor="middle"
            style={{fontFamily:"system-ui, Segoe UI, Arial", fontWeight:900, fontSize:42, letterSpacing:"6px",
                    fill:"url(#streak)", stroke:"#0af7ff", strokeWidth:1.2, filter:"url(#glow)"}}>
        LAR
      </text>
    </svg>
  );
}
