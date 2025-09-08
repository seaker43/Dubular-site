// pages/creator/[slug].js
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

/** Mock loader — replace with real fetch later */
function getMockCreator(slug) {
  const name = (slug || "unknown")
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  const thumbs = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
  ];

  return {
    name,
    slug,
    bannerUrl: "https://images.unsplash.com/photo-1515165562835-c3b8c2e3dba3?q=80&w=1600&auto=format&fit=crop",
    logoUrl: `https://cdn.dubular.live/logos/${slug}.png`,
    bio: "Independent creator streaming gaming, IRL sessions, and chill music sets. New uploads weekly.",
    followers: 48210,
    links: [
      { label: "Website", href: "#" },
      { label: "Twitter/X", href: "#" },
      { label: "Discord", href: "#" },
    ],
    uploads: Array.from({ length: 8 }).map((_, i) => ({
      id: `${slug}-${i}`,
      title: `Latest #${i + 1}`,
      href: `/watch/${slug}-${i}`,
      thumb: thumbs[i % thumbs.length],
      live: i === 1,
    })),
  };
}

export default function CreatorPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const data = getMockCreator(String(slug));
    setCreator(data);
  }, [slug]);

  const title = useMemo(
    () => (creator ? `${creator.name} • dubUlar` : "Creator • dubUlar"),
    [creator]
  );

  if (!creator) {
    return <div className="px-4 py-10 text-neutral-400">Loading creator…</div>;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${creator.name} on dubUlar
