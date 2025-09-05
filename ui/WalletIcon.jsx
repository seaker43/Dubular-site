export default function WalletIcon({ size=26, color="#18e27a7ff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="4" fill="url(#grad)" />
      <text x="32" y="38" textAnchor="middle" fontSize="28" fontWeight="bold" fill={color} fontFamily="Arial">D</text>
      <defs>
        <radialGradient id="grad" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#18e27a7ff" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#18e27a7ff" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
