// pages/index.js
import Layout from "@components/Layout";
import FeaturedHeroTabs from "@components/FeaturedHeroTabs";
import MediaLoopRow from "@components/MediaLoopRow"; // optional if you want rows under hero

export default function Home() {
  // Example live row under hero
  const liveItems = [
    { id: 1, title: "Live Music", image: "/thumbnails/trending1.jpg", color: "red" },
    { id: 2, title: "Live Talk", image: "/thumbnails/trending2.jpg", color: "red" },
  ];

  return (
    <Layout title="dubUlar">
      {/* Featured hero at top */}
      <div className="mt-1">
        <FeaturedHeroTabs />
      </div>

      {/* Optional rows */}
      <MediaLoopRow title="Live" items={liveItems} />
    </Layout>
  );
}
