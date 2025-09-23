"use client";
import FeaturedHeroTabs from "../components/FeaturedHeroTabs";

import React from "react";
import LiveRow from "../components/LiveRow";

export default function HomePage() {
  return (
    <main className="page space-y-8">
      <section aria-label="Featured" className="mb-6">
        <FeaturedHeroTabs />
      </section>
      <section aria-label="Live now" className="mt-2">
        <LiveRow />
      </section>
    </main>
  );
}
