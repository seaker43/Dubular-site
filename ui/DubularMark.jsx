import React from "react";

export default function DubularMark({ height = 72, className = "" }) {
  const h = Number(height) || 72;
  return (
    <svg
      className={className}
      role="img"
      aria-label="DUBULAR"
      width={h * 6.8}
      height={h}
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="b2" />
          <feMerge><feMergeNode in="b2"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="tubeGlow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="8" result="g1" />
          <feGaussianBlur stdDeviation="18" result="g2" />
          <feMerge><feMergeNode in="g2"/><feMergeNode in="g1"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="cyanText" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#BFF3FF" />
          <stop offset="100%" stopColor="#6EE7FF" />
        </linearGradient>
        <linearGradient id="uTube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#00E5FF"/>
          <stop offset="55%" stopColor="#00D2FF"/>
          <stop offset="100%" stopColor="#2BFF88"/>
        </linearGradient>
      </defs>

      <text x="10" y="72" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="900" fontSize="72" fill="url(#cyanText)" filter="url(#softGlow)">DUB</text>
      <g transform="translate(235,6)" filter="url(#tubeGlow)">
        <path d="M20,8 a12,12 0 0 1 12,-12 h24 a12,12 0 0 1 12,12 v46
                 a30,30 0 0 1 -30,30 h-0.5 a30,30 0 0 1 -30,-30 Z"
              fill="none" stroke="url(#uTube)" strokeWidth="18" strokeLinecap="round" />
        <path d="M25,14 v40 a23,23 0 0 0 23,23 h1 a23,23 0 0 0 23,-23 v-40"
              fill="none" stroke="#E9FEFF" strokeOpacity="0.45" strokeWidth="4" strokeLinecap="round"/>
      </g>
      <text x="390" y="72" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="900" fontSize="72" fill="url(#cyanText)" filter="url(#softGlow)">LAR</text>
    </svg>
  );
}
