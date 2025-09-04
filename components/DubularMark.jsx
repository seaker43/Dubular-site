export default function DubularMark(){
  // DUB + tube-neon U + LAR
  return (
    <div style={{display:"inline-flex",gap:8,alignItems:"flex-end",lineHeight:1}} role="img" aria-label="dubUlar neon logo">
      {/* DUB */}
      <span style={{
        color:"var(--#18e27a)", fontWeight:900, fontSize:28,
        textShadow:"0 0 10px rgba(0,229,255,.85), 0 0 20px rgba(0,229,255,.35)"
      }}>dub</span>

      {/* U (inline SVG with gradient fill + tube glow) */}
      <svg width="86" height="64" viewBox="0 0 86 64" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
        <defs>
          <linearGradient id="uGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#18e27a"/>
            <stop offset="48%" stopColor="#25e6d6"/>
            <stop offset="100%" stopColor="#7dfb5f"/>
          </linearGradient>
          <!-- soft outer bloom -->
          <filter id="uOuter" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b1"/>
            <feColorMatrix in="b1" type="matrix" values="0 0 0 0 0   0 0 0 0 1   0 0 0 0 .85  0 0 0 1 0" result="c1"/>
            <feMerge><feMergeNode in="c1"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <!-- inner tube glow (white core) -->
          <filter id="uTube" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="g"/>
            <feMerge>
              <feMergeNode in="g"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <!-- subtle pulsing -->
          <filter id="uPulse" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0">
              <animate attributeName="stdDeviation" values="0;0.8;0" dur="2.8s" repeatCount="indefinite"/>
            </feGaussianBlur>
          </filter>
        </defs>

        <!-- Using a path U so stroke looks like a tube -->
        <path d="
          M 10,6
          L 10,34
          C 10,51 22,58 34,58
          L 52,58
          C 64,58 76,51 76,34
          L 76,6
        "
          fill="none"
          stroke="url(#uGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#uOuter)"/>

        <!-- bright white inner core to sell the neon tube -->
        <path d="
          M 10,6
          L 10,34
          C 10,51 22,58 34,58
          L 52,58
          C 64,58 76,51 76,34
          L 76,6
        "
          fill="none"
          stroke="rgba(255,255,255,.85)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#uTube)"/>

        <!-- gentle pulse halo -->
        <g filter="url(#uPulse)">
          <path d="
            M 10,6
            L 10,34
            C 10,51 22,58 34,58
            L 52,58
            C 64,58 76,51 76,34
            L 76,6
          "
            fill="none"
            stroke="url(#uGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".25"/>
        </g>
      </svg>

      {/* LAR */}
      <span style={{
        color:"var(--#18e27a)", fontWeight:900, fontSize:28,
        textShadow:"0 0 10px rgba(0,229,255,.85), 0 0 20px rgba(0,229,255,.35)"
      }}>lar</span>
    </div>
  );
}
