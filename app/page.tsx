"use client";
import FeaturedHeroTabs from "@/components/FeaturedHeroTabs";
import LiveRow from "@/components/LiveRow";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <FeaturedHeroTabs />
      <LiveRow />
    </main>
  );
}
