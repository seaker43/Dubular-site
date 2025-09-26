"use client";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
  return (
    <main className="px-4 py-6">
      {/* Search bar pinned under header */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* Results placeholder */}
      <section className="text-center text-neutral-400">
        <p>Start typing above to search content…</p>
      </section>
    </main>
  );
}
