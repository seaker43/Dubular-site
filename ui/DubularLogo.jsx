export default function DubularLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 128" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dubular-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="50%" stopColor="#00ff9d" />
          <stop offset="100%" stopColor="#00bfff" />
        </linearGradient>
      </defs>
      <text x="0" y="90" fontFamily="Arial Black, sans-serif" fontSize="96" fill="url(#dubular-gradient)" stroke="#0ff" strokeWidth="2">
        DUB
      </text>
      <text x="180" y="90" fontFamily="Arial Black, sans-serif" fontSize="96" fill="url(#dubular-gradient)" stroke="#0ff" strokeWidth="2">
        LAR
      </text>
      <path d="M250 20 v60 a40 40 0 0 0 80 0 v-60" fill="none" stroke="url(#dubular-gradient)" strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}
