// Neon DUBULAR mark (SVG, no Tailwind).
// Usage: import DubularMark from "../ui/DubularMark"; <DubularMark className="w-full" />
export default function DubularMark({ className = "", animated = true }) {
  return (
    <svg
      viewBox="0 0 900 240"
      width="900"
      height="240"
      role="img"
      aria-label="DUBULAR neon logo"
      className={className}
    >
      <defs>
        <!-- Gradients -->
        <linearGradient id="uTube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#00e5ff"/>
          <stop offset="60%" stop-color="#00d2ff"/>
          <stop offset="100%" stop-color="#52ff7a"/>
        </linearGradient>
        <linearGradient id="uTubeCore" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#bfffff"/>
          <stop offset="100%" stop-color="#d7ffd7"/>
        </linearGradient>
        <linearGradient id="larFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stop-color="#00e5ff"/>
          <stop offset="100%" stop-color="#46fff1"/>
        </linearGradient>

        <!-- Soft cyan glow for text -->
        <filter id="textGlow" x="-40%" y="-60%" width="180%" height="220%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="b1"/>
          <feColorMatrix in="b1" type="matrix"
            values="0 0 0 0 0.0,
                    0 0 0 0 0.9,
                    0 0 0 0 1.0,
                    0 0 0 .9 0" result="c1"/>
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="b2"/>
          <feColorMatrix in="b2" type="matrix"
            values="0 0 0 0 0.0,
                    0 0 0 0 0.8,
                    0 0 0 0 1.0,
                    0 0 0 .45 0" result="c2"/>
          <feMerge>
            <feMergeNode in="c2"/>
            <feMergeNode in="c1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <!-- Tube glow for the U -->
        <filter id="tubeGlow" x="-60%" y="-80%" width="220%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="g1"/>
          <feColorMatrix in="g1" type="matrix"
            values="0 0 0 0 0.0,
                    0 0 0 0 0.95,
                    0 0 0 0 1.0,
                    0 0 0 .95 0" result="c1"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="g2"/>
          <feColorMatrix in="g2" type="matrix"
            values="0 0 0 0 0.0,
                    0 0 0 0 0.85,
                    0 0 0 0 1.0,
                    0 0 0 .55 0" result="c2"/>
          <feMerge>
            <feMergeNode in="c2"/>
            <feMergeNode in="c1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <!-- CSS inside SVG so no external files needed -->
        <style><![CDATA[
          @keyframes fizz {
            0%, 100% { opacity: 1 }
            48%      { opacity: 0.96 }
            52%      { opacity: 0.88 }
            55%      { opacity: 1 }
            70%      { opacity: 0.97 }
          }
          .uGlow { animation: fizz 3.8s ease-in-out infinite; }
        ]]></style>
      </defs>

      <!-- Wordmark: DUB · U · LAR -->
      <g filter="url(#textGlow)">
        <!-- "DUB" — white with cyan glow -->
        <text x="120" y="140"
          fill="#f5fbff"
          font-family="Poppins, Inter, Segoe UI, system-ui, -apple-system, Arial, sans-serif"
          font-weight="800" font-size="114" letter-spacing="1">DUB</text>

        <!-- "LAR" — cyan gradient with glow -->
        <text x="565" y="140"
          fill="url(#larFill)"
          font-family="Poppins, Inter, Segoe UI, system-ui, -apple-system, Arial, sans-serif"
          font-weight="800" font-size="114" letter-spacing="1">LAR</text>
      </g>

      <!-- The oversized neon tube "U" -->
      <g transform="translate(0,0)">
        <!-- shared U path -->
        <path id="UPath" d="M 500 54 v 88
                             a 100 100 0 0 1 -200 0 v -88"
              fill="none" stroke-linecap="round" stroke-linejoin="round"/>

        <!-- outer colored tube (with glow) -->
        <use href="#UPath" stroke="url(#uTube)" stroke-width="30"
             filter="url(#tubeGlow)"
             className={animated ? "uGlow" : ""} />

        <!-- bright inner edge -->
        <use href="#UPath" stroke="url(#uTube)" stroke-width="18" />

        <!-- inner glass core (dark to simulate neon tube interior) -->
        <use href="#UPath" stroke="#0a0f18" stroke-width="10" opacity="0.8"/>
        <!-- faint core highlight -->
        <use href="#UPath" stroke="url(#uTubeCore)" stroke-width="6" opacity="0.6"/>
      </g>
    </svg>
  );
}
