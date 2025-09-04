export default function DubularWordmark(){
  return (
    <svg viewBox="0 0 700 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad_cyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f5ff"/>
          <stop offset="100%" stopColor="#00ffa3"/>
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <text x="40" y="90" fontFamily="Arial Black, sans-serif" fontSize="64" fill="url(#grad_cyan)" filter="url(#glow)">DUB</text>
      <text x="200" y="108" fontFamily="Arial Black, sans-serif" fontSize="110" fill="url(#grad_cyan)" filter="url(#glow)">U</text>
      <text x="340" y="90" fontFamily="Arial Black, sans-serif" fontSize="64" fill="url(#grad_cyan)" filter="url(#glow)">LAR</text>
    </svg>
  );
}
