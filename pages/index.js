import Layout from "@/components/Layout";
import FeaturedHero from "@/components/FeaturedHero";
import MediaRow from "@/components/MediaRow";

export default function Home() {
  const liveItems = [
    {
      id: "live-1",
      title: "Creator Live",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
      live: true,
    },
    {
      id: "live-2",
      title: "Indie News Live",
      image: "https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
      live: true,
    },
  ];

  return (
    <Layout title="dubUlar">
      <div className="px-4 md:px-6 pt-4 pb-2">
        <FeaturedHero title="Featured Content" fullHeight /> {/* 👈 homepage only */}
      </div>

      <MediaRow title="Live" items={liveItems} href="/find#live" />
    </Layout>
  );
}
