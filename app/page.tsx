"use client";
import FeaturedHeroTabs from "@/components/FeaturedHeroTabs";
import LiveRow from "@/components/LiveRow";
import ThumbnailCard from "@/components/ThumbnailCard";
const demo=[
  {title:"Sample Stream 1", image:"/placeholder.svg"},
  {title:"Sample Stream 2", image:"/placeholder.svg"},
  {title:"Sample Stream 3", image:"/placeholder.svg"},
  {title:"Sample Stream 4", image:"/placeholder.svg"}
];
export default function Page(){
  return (
    <main>
      <FeaturedHeroTabs />
      <section className="mt-6">
        <h2 className="px-4 text-lg font-semibold">Trending Now</h2>
        <LiveRow>{demo.map((d,i)=>(<ThumbnailCard key={i} data={d}/>))}</LiveRow>
      </section>
    </main>
  );
}
