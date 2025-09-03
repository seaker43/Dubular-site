import React from "react";

export default function BottomBar(){
  return (
    <nav className="bottomBar" role="navigation" aria-label="Primary">
      <a className="shortcut shortcut--ranks" href="#" onClick={e=>e.preventDefault()}>
        <span className="shortcutIcon">📊</span>
        <span className="shortcutLabel">Ranks</span>
      </a>
      <a className="shortcut shortcut--favs" href="#" onClick={e=>e.preventDefault()}>
        <span className="shortcutIcon">❤️</span>
        <span className="shortcutLabel">Favs</span>
      </a>
      <a className="shortcut shortcut--search" href="#" onClick={e=>e.preventDefault()}>
        <span className="shortcutIcon">🔍</span>
        <span className="shortcutLabel">Search</span>
      </a>
      <a className="shortcut shortcut--wallet" href="#" onClick={e=>e.preventDefault()}>
        <span className="shortcutIcon">💳</span>
        <span className="shortcutLabel">Wallet</span>
      </a>
      <a className="shortcut shortcut--account" href="#" onClick={e=>e.preventDefault()}>
        <span className="shortcutIcon">👤</span>
        <span className="shortcutLabel">Account</span>
      </a>
    </nav>
  );
}
