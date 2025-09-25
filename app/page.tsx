"use client";
import Ticker from "@/components/Ticker";
import FeaturedHeroTabs from "@/components/FeaturedHeroTabs";
import LiveRow from "@/components/LiveRow";

export default function HomePage() {
  return (
    <main className=" relative overflow-visible  flex flex-col gap-8 p-4">
      <div className=" relative overflow-visible  rounded-lg">
      <Ticker />
        <FeaturedHeroTabs />
        
        
      </div>
      <div className="rounded-lg">
        <LiveRow />
      </div>
    </main>
  );
}
