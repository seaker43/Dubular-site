export default function BottomBar() {
  const items = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Explore", href: "/explore", icon: CompassIcon },
    { label: "Upload", href: "/upload", icon: PlusIcon },
    { label: "Profile", href: "/me", icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800/80 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-around px-2">
        {items.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-300 transition hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            <Icon className="h-6 w-6" />
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* --- tiny inline icons (no extra deps) --- */
function HomeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        d="M3 11.5 12 4l9 7.5M5 10.5V20h14v-9.5" />
    </svg>
  );
}
function CompassIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        d="m9 15 6-3 3-6-6 3-3 6Z" />
      <circle cx="12" cy="12" r="9" strokeWidth="1.7" />
    </svg>
  );
}
function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}
function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        d="M17 18c0-2.8-2.7-4-5-4s-5 1.2-5 4M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </svg>
  );
          }
