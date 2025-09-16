export default function DubularCoin({ size = 36, className = "" }) {
 const accent = "var(--dubular-accent,#18e27a)";
 return (
 <svg
 width={size}
 height={size}
 viewBox="0 0 200 200"
 className={className}
 xmlns="http://www.w3.org/2000/svg"
 >
 <defs>
 <radialGradient id="rimGrad" cx="50%" cy="50%" r="60%">
 <stop offset="0%" stopColor="#0c0c0c" />
 <stop offset="55%" stopColor="#1a1a1a" />
 <stop offset="100%" stopColor="#0a0a0a" />
 </radialGradient>
 <radialGradient id="faceGrad" cx="50%" cy="50%" r="65%">
 <stop offset="0%" stopColor="#0e2218" />
 <stop offset="55%" stopColor="#072212" />
 <stop offset="100%" stopColor="#03150c" />
 </radialGradient>
 <linearGradient id="rimEdge" x1="0" y1="0" x2="1" y2="1">
 <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
 <stop offset="40%" stopColor="#fff" stopOpacity="0.10" />
 <stop offset="100%" stopColor={accent} stopOpacity="0.25" />
 </linearGradient>
 <filter id="coinGlow" x="-40%" y="-40%" width="180%" height="180%">
 <feDropShadow
 dx="0"
 dy="0"
 stdDeviation="6"
 floodColor={accent}
 floodOpacity="0.7"
 />
 <feDropShadow
 dx="0"
 dy="0"
 stdDeviation="16"
 floodColor={accent}
 floodOpacity="0.35"
 />
 </filter>
 <filter id="emboss" x="-20%" y="-20%" width="140%" height="140%">
 <feOffset dx="-1" dy="-1" result="top" />
 <feGaussianBlur in="top" stdDeviation="1.2" result="topBlur" />
 <feOffset dx="1.2" dy="1.2" result="bottom" />
 <feGaussianBlur in="bottom" stdDeviation="1.6" result="bottomBlur" />
 <feComposite
 in="topBlur"
 in2="bottomBlur"
 operator="arithmetic"
 k1="0"
 k2="1"
 k3="-1"
 k4="0"
 result="bevel"
 />
 <feBlend in="SourceGraphic" in2="bevel" mode="screen" />
 </filter>
 </defs>
 <circle
 cx="100"
 cy="100"
 r="94"
 fill="url(#rimGrad)"
 filter="url(#coinGlow)"
 />
 <circle
 cx="100"
 cy="100"
 r="82"
 fill="url(#faceGrad)"
 stroke="url(#rimEdge)"
 strokeWidth="4"
 />
 <circle
 cx="100"
 cy="100"
 r="88"
 fill="none"
 stroke={accent}
 strokeOpacity="0.25"
 strokeWidth="1"
 strokeDasharray="2 6"
 />
 <circle
 cx="100"
 cy="100"
 r="86"
 fill="none"
 stroke="#121212"
 strokeWidth="2"
 opacity="0.7"
 />
 <path
 d="M70 65h28c30 0 48 17 48 35s-18 35-48 35H70V65Z M92 82v36h6c18 0 28-9 28-18s-10-18-28-18h-6z"
 fill={accent}
 opacity="0.95"
 filter="url(#emboss)"
 />
 </svg>
 );
}
