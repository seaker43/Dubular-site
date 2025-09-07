// components/BottomBar.js
import React from "react";

export default function BottomBar() {
  const items = [
    { label: "Home", icon: HomeIcon },
    { label: "Search", icon: SearchIcon },
    { label: "Upload", icon: UploadIcon },
    { label: "Profile", icon: UserIcon },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[rgba(6,10,14,0.85)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(6,10,14,0.65)]">
      <ul className="mx-auto grid max-w-3xl grid-cols-4">
        {items.map(({ label, icon: Icon }) => (
          <li key={label}>
            <button
              type="button"
              className="flex w-full flex-col items-center gap-1 py-3 text-slate-300 hover:text-white"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[11px]">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* Simple inline icons (no extra deps) */
function HomeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5h-5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10.5Z"
      />
    </svg>
  );
}
function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="11" cy="11" r="7" strokeWidth="1.6" />
      <path strokeWidth="1.6" strokeLinecap="round" d="M20 20l-3.5-3.5" />
    </svg>
  );
}
function UploadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16V4m0 0 4 4m-4-4-4 4M4 20h16"
      />
    </svg>
  );
}
function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="8" r="4" strokeWidth="1.6" />
      <path strokeWidth="1.6" d="M4 21c2.5-4 13.5-4 16 0" />
    </svg>
  );
}
