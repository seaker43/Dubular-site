import React from "react";

/** Simple neon wordmark used in hero/featured banner.
 *  Usage: <DubularLogo size={56} />
 */
export default function DubularLogo({ size = 56 }) {
  const base = {
    fontFamily: "Inter, ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial",
    fontWeight: 800,
    letterSpacing: "0.04em",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "baseline",
    gap: "0.18em",
    filter: "drop-shadow(0 0 8px rgba(0,255,200,.25)) drop-shadow(0 0 18px rgba(0,200,255,.15))",
  };
  const glow = (c) => ({ color: c, textShadow: `0 0 12px ${c}66, 0 0 28px ${c}33` });

  return (
    <div style={base}>
      <span style={{ ...glow("#5eead4"), fontSize: size * 0.62 }}>DUB</span>
      <span
        style={{
          ...glow("#60a5fa"),
          fontSize: size * 0.9,
          border: "2px solid #7dd3fc",
          borderRadius: 12,
          padding: "0 .18em",
          boxShadow:
            "inset 0 0 12px #7dd3fc55, 0 6px 18px rgba(0,200,255,.12), 0 0 48px rgba(20,220,200,.18)",
          background:
            "linear-gradient(180deg, rgba(0,140,255,.12), rgba(0,255,200,.06))",
        }}
      >
        U
      </span>
      <span style={{ ...glow("#34d399"), fontSize: size * 0.62 }}>LAR</span>
    </div>
  );
}
