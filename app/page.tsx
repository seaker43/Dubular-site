"use client";
import FeaturedHeroTabs from "@/components/FeaturedHeroTabs";
import LiveRow from "@/components/LiveRow";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <div className="rounded-lg shadow-[0_0_30px_10px_rgba(255,0,255,0.4)]">
        <FeaturedHeroTabs />
      </div>
      <div className="rounded-lg shadow-[0_0_30px_10px_rgba(255,0,0,0.4)]">
        <LiveRow />
      </div>
    </main>
  );
}
