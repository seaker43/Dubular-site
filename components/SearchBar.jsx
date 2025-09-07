// components/SearchBar.jsx
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ defaultValue = "", onChange }) {
  const [q, setQ] = useState(defaultValue);
  const inputRef = useRef(null);

  // tiny debounce so typing feels smooth
  useEffect(() => {
    const t = setTimeout(() => onChange?.(q.trim()), 160);
    return () => clearTimeout(t);
  }, [q, onChange]);

  const clear = () => {
    setQ("");
    inputRef.current?.focus();
  };

  return (
    <div className="px-4 md:px-6 mb-4">
      <div className="
        flex items-center gap-2 px-3 py-2 rounded-xl
        bg-neutral-900/70 border border-neutral-800
        focus-within:border-emerald-500/50 focus-within:shadow-[0_0_18px_rgba(16,185,129,0.35)]
        transition
      ">
        <Search size={18} className="text-neutral-400 shrink-0" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search titles…"
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral-500"
          inputMode="search"
          aria-label="Search"
        />
        {q !== "" && (
          <button
            onClick={clear}
            aria-label="Clear search"
            className="p-1 rounded hover:bg-neutral-800/70 active:scale-95"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
