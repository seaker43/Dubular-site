"use client";
import FeaturedHeroTabs from "../components/FeaturedHeroTabs";

import React from "react";
import LiveRow from "../components/LiveRow";

export default function HomePage() {
  return (
    <main className="page pb-20">
      <FeaturedHeroTabs />
      <LiveRow />
    </main>
  );
}
