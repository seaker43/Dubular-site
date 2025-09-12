import React from "react";
export default function Wallet() {
  return (
    <main className="main" style={{ paddingTop: 16 }}>
      <h1
        style={{
          fontWeight: 900,
          color: "#7efcff",
          fontSize: "clamp(28px,6vw,42px)",
        }}
      >
        Wallet
      </h1>
      <p style={{ color: "#b7c0d8", marginTop: 10 }}>
        Your Dubular balance and transactions will appear here.
      </p>
    </main>
  );
}

export async function getServerSideProps(){ return { props: {} }; }
