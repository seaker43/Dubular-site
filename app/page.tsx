import FeaturedHeroTabs from "@/components/FeaturedHeroTabs";
import LiveRow from "@/components/LiveRow";
const demo = [
  { title: "Sample Stream 1", image: "/placeholder.svg" },
  { title: "Sample Stream 2", image: "/placeholder.svg" },
  { title: "Sample Stream 3", image: "/placeholder.svg" },
  { title: "Sample Stream 4", image: "/placeholder.svg" },
];
export default function Page() {
  return (
    <main>
      <FeaturedHeroTabs />
      <LiveRow />
      <FeaturedHeroTabs />
      <section className="mt-6">
        <LiveRow>
          {demo.map((d, i) => (
            <ThumbnailCard key={i} data={d} />
          ))}
        </LiveRow>
      </section>
    </main>
  );
}
