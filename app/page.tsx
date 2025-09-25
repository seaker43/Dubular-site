"use client";
import FeaturedHeroTabs from "@/components/FeaturedHeroTabs";
import LiveRow from "@/components/LiveRow";

export default function HomePage() {
  return (
    <main className="hero-glow flex flex-col gap-8 p-4">
      <div className="hero-glow rounded-lg">
        <FeaturedHeroTabs />
        
        
      </div>
      <div className="rounded-lg">
        <LiveRow />
      </div>
    </main>
  );
}
