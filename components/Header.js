import React from "react";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="beta-header">
      <button className="icon-btn" aria-label="Toggle sidebar" onClick={onToggleSidebar}>
        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>
      <div className="brand">
        <span className="dot" />
        <span className="text">dubUlar</span>
        <span className="beta-pill">beta</span>
      </div>
      <div className="header-actions">
        <button className="pill">Docs</button>
        <button className="pill primary">Upgrade</button>
      </div>
    </header>
  );
}
