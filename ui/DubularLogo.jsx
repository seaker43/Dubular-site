export default function DubularLogo() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      fontFamily: "Arial Black, sans-serif",
      fontWeight: "900",
      textTransform: "uppercase"
    }}>
      <span style={{
        fontSize: "2rem",
        background: "linear-gradient(90deg,#00f7ff,#00e5ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 12px #00e5ff, 0 0 24px #00f7ff"
      }}>
        DUB
      </span>
      <span style={{
        fontSize: "6rem",
        lineHeight: "1",
        color: "#00f7ff",
        textShadow: "0 0 18px #00e5ff, 0 0 36px #00f7ff, 0 0 60px #00f7ff",
        animation: "pulse 2s infinite ease-in-out"
      }}>
        U
      </span>
      <span style={{
        fontSize: "2rem",
        background: "linear-gradient(90deg,#00e5ff,#00f7ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 12px #00e5ff, 0 0 24px #00f7ff"
      }}>
        LAR
      </span>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
