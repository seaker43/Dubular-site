import React from "react";
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 border-b border-white/10">Dubular</header>
      <main className="flex-1">{children}</main>
      <footer className="py-4 border-t border-white/10 text-sm opacity-70">© Dubular</footer>
    </div>
  );
}
