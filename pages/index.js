import Layout from "@components/Layout";
import FeaturedHero from "@components/FeaturedHero";
import MediaRow from "@components/MediaRow";

export default function Home() {
  return (
    <Layout title="dubUlar">
      <div className="px-4 md:px-6 mt-1">
        <FeaturedHero title="Featured Content" fullHeight />
      </div>

      <div className="px-4 md:px-6 mt-6">
        <MediaRow
          title="Live"
          items={[
            { id: 1, title: "Live Music", image: "/thumbnails/trending1.jpg", live: true },
            { id: 2, title: "Live Show",  image: "/thumbnails/trending2.jpg", live: true }
          ]}
        />
      </div>
    </Layout>
  );
}
