export default function DubularMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1100 220"
      width="100%"
      height="100%"
      className={className}
      role="img"
      aria-label="DUBULAR"
    >
      {/* Gradients */}
      <defs>
        <linearGradient id="uTube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00e5ff"/>
          <stop offset="60%" stopColor="#00d2ff"/>
          <stop offset="100%" stopColor="#34f26e"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="c"/>
          <feMerge><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* DUB __ U __ LAR */}
      <g filter="url(#glow)">
        {/* DUB */}
        <text x="60" y="150" fontFamily="Inter, system-ui, Arial" fontWeight="800"
              fontSize="120" letterSpacing="4" fill="#a7edff">DUB</text>

        {/* U tube */}
        <g transform="translate(420,18)">
          <path d="M60,10 h100 a30,30 0 0 1 30,30 v70 a70,70 0 0 1 -140,0 v-70 a30,30 0 0 1 30,-30 z"
                fill="none" stroke="url(#uTube)" strokeWidth="22" strokeLinejoin="round"/>
          <rect x="85" y="40" width="30" height="70" rx="15" fill="url(#uTube)"/>
        </g>

        {/* LAR */}
        <text x="700" y="150" fontFamily="Inter, system-ui, Arial" fontWeight="800"
              fontSize="120" letterSpacing="4" fill="#a7edff">LAR</text>
      </g>
    </svg>
  );
}
