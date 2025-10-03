"use client";
import LiveRow from "@/components/LiveRow";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
  const sections = [
    { title: "Live" },
    { title: "Gaming" },
    { title: "Music" },
    { title: "Chit Chat" },
    { title: "Reality" },
    { title: "Podcast" },
    { title: "Inde Media" },
    { title: "Influencers" },
  ];

  return (
    <main className="page search-page search-page px-4 py-6 )] ))]">
      {/* Search bar pinned under header */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* Category sections */}
      {sections.map((s, i) => (
        <section key={s.title} className="mt-8">
          <h2 className="pl-6 mb-3 text-lg font-bold text-white/90">
            {s.title}
          </h2>
          <LiveRow glowRed={i === 0} showLiveBadge={i === 0} />
        </section>
      ))}
    </main>
  );
}
