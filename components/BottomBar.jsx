// components/BottomBar.jsx
export default function BottomBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800/60 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex max-w-3xl items-center justify-around px-6 py-3 text-slate-300">
        <a href="#" className="flex flex-col items-center gap-1 hover:text-white">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3z" />
          </svg>
          <span className="text-[11px]">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 hover:text-white">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 21 15.8 15.8m1.7-5.5a7.2 7.2 0 1 1-14.4 0 7.2 7.2 0 0 1 14.4 0z" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-[11px]">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 hover:text-white">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5c0-3-4-5.5-9-5.5Z" />
          </svg>
          <span className="text-[11px]">Profile</span>
        </a>
      </div>
    </nav>
  );
}
