import React from "react";

export default function DubularLogo() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"120px"
    }}>
      <h1 style={{
        fontFamily:"Poppins, sans-serif",
        fontWeight:"900",
        fontSize:"clamp(32px,6vw,72px)",
        letterSpacing:"2px",
        textAlign:"center",
        background:"linear-gradient(90deg,#00f7ff,#007bff,#00e56f)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent",
        textShadow:"0 0 20px rgba(0,247,255,0.75),0 0 40px rgba(0,123,255,0.6),0 0 60px rgba(0,229,111,0.5)"
      }}>
        DUB<span style={{fontSize:"1.4em"}}>U</span>LAR
      </h1>
    </div>
  );
}
