export default function DubularMark({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 900 260"
      width="360"
      height="104"
      className={className}
      style={style}
      role="img"
      aria-label="DUBULAR"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="uTube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#00e5ff" />
          <stop offset="60%" stopColor="#00d2ff" />
          <stop offset="100%" stopColor="#19ff6e" />
        </linearGradient>
        <linearGradient id="cyan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#a7f7ff" />
          <stop offset="100%" stopColor="#00d2ff" />
        </linearGradient>
        <linearGradient id="aqua" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#9ff6ff" />
          <stop offset="100%" stopColor="#19ff6e" />
        </linearGradient>

        {/* Soft glow */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b2" />
          <feMerge>
            <feMergeNode in="b2" />
            <feMergeNode in="b1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* DUB */}
      <g filter="url(#glow)">
        <text x="100" y="155" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="900"
              fontSize="120" fill="url(#cyan)" letterSpacing="1.5">
          DUB
        </text>
      </g>

      {/* Big U */}
      <g filter="url(#glow)">
        <path
          d="
            M 360,45
            h 80
            v 120
            a 70 70 0 0 1 -140 0
            V 45
            h 60
            v 120
            a 10 10 0 0 0 20 0
            V 45
          "
          fill="none"
          stroke="url(#uTube)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* LAR */}
      <g filter="url(#glow)">
        <text x="520" y="155" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="900"
              fontSize="120" fill="url(#aqua)" letterSpacing="1.5">
          LAR
        </text>
      </g>
    </svg>
  );
}
