import Layout from "@/components/Layout";
import FeaturedHero from "@/components/FeaturedHero";
import MediaRow from "@/components/MediaRow";

export default function Home() {
  return (
    <Layout title="dubUlar">
      <div className="px-4 md:px-6 pt-4 pb-2">
        <FeaturedHero title="Featured Content" />
      </div>
      <MediaRow title="Trending Now" />
      <MediaRow title="Art" />
      <MediaRow title="Independent Media" />
    </Layout>
  );
}
