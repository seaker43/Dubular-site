import Layout from "@/components/Layout";
import MediaRow from "@/components/MediaRow";

export default function Find() {
  const trending = [
    { id: "t-1", title: "LoFi #1", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
    { id: "t-2", title: "LoFi #2", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
    { id: "t-3", title: "LoFi #3", image: "https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
  ];

  const art = [
    { id: "a-1", title: "Art Drop", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
    { id: "a-2", title: "Sketches", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
    { id: "a-3", title: "Concepts", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
  ];

  const indie = [
    { id: "i-1", title: "Indie #1", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
    { id: "i-2", title: "Indie #2", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
    { id: "i-3", title: "Indie #3", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" },
  ];

  return (
    <Layout title="Find">
      <div className="pt-4" />

      {/* You can add a search bar later here */}

      <MediaRow id="trending" title="Trending" items={trending} href="/find#trending" />
      <MediaRow id="art" title="Art" items={art} href="/find#art" />
      <MediaRow id="indie" title="Independent Media" items={indie} href="/find#indie" />
    </Layout>
  );
}
