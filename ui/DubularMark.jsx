export default function DubularMark({ className = "logo" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 960 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DUBULAR"
    >
      <defs>
        <linearGradient id="dub_cyan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8AD6FF"/>
          <stop offset="1" stopColor="#CFF2FF"/>
        </linearGradient>
        <linearGradient id="u_neon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00E5FF"/>
          <stop offset="0.55" stopColor="#00D8FF"/>
          <stop offset="1" stopColor="#37FF84"/>
        </linearGradient>
        <linearGradient id="lar_cyan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#CFF2FF"/>
          <stop offset="1" stopColor="#8AD6FF"/>
        </linearGradient>

        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- DUB -->
      <g filter="url(#softGlow)" transform="translate(40,28)">
        <path d="M0,0 h120 a48,48 0 0 1 0,96 H0 Z" fill="url(#dub_cyan)" opacity="0.95"/>
        <rect x="150" y="0" width="120" height="96" rx="18" fill="url(#dub_cyan)" opacity="0.95"/>
        <rect x="300" y="0" width="120" height="96" rx="18" fill="url(#dub_cyan)" opacity="0.95"/>
      </g>

      <!-- U (neon) -->
      <g filter="url(#softGlow)" transform="translate(360,10)">
        <path
          d="M60,10 v90 a80,80 0 0 0 160,0 v-90"
          fill="none"
          stroke="url(#u_neon)"
          strokeWidth="28"
          strokeLinecap="round"
        />
      </g>

      <!-- LAR -->
      <g filter="url(#softGlow)" transform="translate(610,28)">
        <rect x="0" y="0" width="60" height="96" rx="10" fill="url(#lar_cyan)" opacity="0.95"/>
        <rect x="90" y="0" width="120" height="96" rx="18" fill="url(#lar_cyan)" opacity="0.95"/>
        <rect x="240" y="0" width="120" height="96" rx="18" fill="url(#lar_cyan)" opacity="0.95"/>
      </g>
    </svg>
  );
}
