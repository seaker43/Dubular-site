import React from "react";
export default function DubularWordmark(){return(<svg height="54" viewBox="0 0 520 110" style={{display:"block",filter:"drop-shadow(0 10px 30px rgba(0,0,0,.35))"}} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dubular logo wordmark">
  <defs>
    <linearGradient id="cy" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#25f4ff"/><stop offset="100%" stopColor="#22e3a1"/></linearGradient>
    <linearGradient id="wht" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#e9ffff"/><stop offset="100%" stopColor="#cfffff"/></linearGradient>
    <radialGradient id="bg" cx="50%" cy="0%" r="90%"><stop offset="0%" stopColor="#0f2238"/><stop offset="60%" stopColor="#0b1320"/><stop offset="100%" stopColor="#0a0f16"/></radialGradient>
    <filter id="uGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"><animate attributeName="stdDeviation" values="2;3.2;2" dur="3.2s" repeatCount="indefinite"/></feGaussianBlur></filter>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.2"/></filter>
  </defs>

  {/*  subtle header pill bg  */}
  <rect x="0" y="0" width="520" height="110" rx="22" fill="url(#bg)" opacity=".85"/>

  {/*  DUB (slightly overlaps U)  */}
  <g transform="translate(52,68)" fill="url(#wht)" filter="url(#soft)" opacity=".95" style={{letterSpacing:2.2}}>
    <text x="0" y="0" fontFamily="system-ui,Segoe UI,Arial" fontWeight="800" fontSize="44" fill="url(#wht)" opacity=".92">DUB</text>
  </g>

  {/*  BIG U  */}
  <g transform="translate(240,22)">
    {/*  breathing scale for the U  */}
    <g id="bigU" transform="scale(1.10) scale(1.20)">
      <animateTransform attributeName="transform" attributeType="XML" type="scale" values="1;1.03;1" dur="3.2s" repeatCount="indefinite"/>
      {/*  inner neon stroke  */}
      <path d="M20,10 v42 a24,24 0 0 0 48,0 v-42" fill="none" stroke="url(#cy)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      {/*  outer glow  */}
      <path d="M20,10 v42 a24,24 0 0 0 48,0 v-42" fill="none" stroke="url(#cy)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" filter="url(#uGlow)" opacity=".45"/>
    </g>
  </g>

  {/*  LAR to the right of U  */}
  <g transform="translate(340,68)" fill="url(#wht)" filter="url(#soft)" opacity=".95" style={{letterSpacing:2.2}}>
    <text x="0" y="0" fontFamily="system-ui,Segoe UI,Arial" fontWeight="800" fontSize="44" fill="url(#wht)" opacity=".92">LAR</text>
  </g>
</svg>);}
