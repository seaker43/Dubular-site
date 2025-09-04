export default function DubularMark({ size = 420, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 130" width={size} height={(size*130)/460} className={className} aria-label="Dubular logo">
      <defs>
        <linearGradient id="grad_u" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#00E7FF"/><stop offset="100%" stopColor="#2BFF88"/></linearGradient>
        <linearGradient id="grad_cyan" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#A7E8FF"/><stop offset="100%" stopColor="#D9F6FF"/></linearGradient>
        <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="6" result="blur1"/><feGaussianBlur stdDeviation="12" in="SourceGraphic" result="blur2"/><feMerge><feMergeNode in="blur2"/><feMergeNode in="blur1"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="outerGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="12" result="b1"/><feColorMatrix in="b1" type="matrix" values="0 0 0 0 0  0 0 0 0 1  0 0 0 0 0.6  0 0 0 1 0" result="c1"/><feMerge><feMergeNode in="c1"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g opacity="0.28" filter="url(#softGlow)"><rect x="0" y="0" width="460" height="130" fill="none"/><ellipse cx="230" cy="64" rx="210" ry="42" fill="#0FF" opacity="0.35"/></g>
      <g transform="translate(16,20)" fill="url(#grad_cyan)" filter="url(#softGlow)">
        <path d="M0,0 H42 c28,0 44,18 44,45 s-16,45 -44,45 H0 Z M16,16 v58 h24 c18,0 29,-12 29,-29 s-11,-29 -29,-29 Z"/>
        <path d="M102,0 v58 c0,28 20,32 33,32 s33,-4 33,-32 V0 h16 v60 c0,34 -27,50 -49,50 s-49,-16 -49,-50 V0 Z"/>
        <path d="M214,0 h46 c20,0 32,12 32,28 c0,11 -4,20 -13,24 c11,5 17,14 17,27 c0,19 -13,31 -35,31 h-47 Z M230,16 v24 h26 c9,0 15,-6 15,-12 c0,-8 -5,-12 -15,-12 Z M230,60 v30 h27 c11,0 17,-7 17,-15 c0,-9 -7,-15 -17,-15 Z"/>
      </g>
      <g transform="translate(198,10)"><path d="M40,0 h24 a16,16 0 0 1 16,16 v54 c0,30 -22,50 -48,50 s-48,-20 -48,-50 v-54 a16,16 0 0 1 16,-16 h24 v16 h-24 v54 c0,22 16,34 32,34 s32,-12 32,-34 v-54 h-24 Z" fill="url(#grad_u)" filter="url(#outerGlow)"/><path d="M48,12 h8 a8,8 0 0 1 8,8 v50 c0,22 -18,36 -32,36 s-32,-14 -32,-36 v-50 a8,8 0 0 1 8,-8 h8 v16 h-8 v42 c0,14 10,22 24,22 s24,-8 24,-22 v-42 h-8 Z" fill="#061219" opacity="0.82"/></g>
      <g transform="translate(318,20)" fill="url(#grad_cyan)" filter="url(#softGlow)">
        <path d="M0,0 v90 h58 v-16 h-42 V0 Z"/>
        <path d="M72,90 L99,0 h18 l27,90 h-17 l-6,-20 h-28 l-6,20 Z M97,56 h22 l-11,-36 Z"/>
        <path d="M151,0 h40 c21,0 31,12 31,28 c0,12 -6,20 -17,25 l20,37 h-19 l-18,-34 h-18 v34 h-19 Z M170,16 v28 h19 c12,0 18,-6 18,-14 c0,-9 -6,-14 -18,-14 Z"/>
      </g>
    </svg>
  );
}
