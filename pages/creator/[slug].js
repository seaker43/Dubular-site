// pages/creator/[slug].js
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

/** ------- Mock data loader (replace with real API later) ------- */
function getMockCreator(slug) {
  const name = (slug || "unknown")
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  // Use your existing thumbnails or placeholders
  const sampleThumbs = [
    "/thumbnails/trending1.jpg",
    "/thumbnails/trending2.jpg",
    "/thumbnails/trending3.jpg",
    "/thumbnails/trending4.jpg",
  ];

  return {
    name,
    slug,
    banner: "/demo/creator-banner.jpg", // add an image in /public/demo or swap to your own
    avatar: `/creators/${slug}.png`, // your convention; will fallback if missing
    bio:
      "Independent creator streaming gaming, IRL sessions, and chill music sets. New uploads weekly.",
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
      thumb: sampleThumbs[i % sampleThumbs.length],
      live: i === 1, // make one “live” to demo red glow
    })),
  };
}

export default function CreatorPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    if (!slug) return;
    // Replace with real fetch(`/api/creator/${slug}`) when ready
    const data = getMockCreator(String(slug));
    setCreator(data);
  }, [slug]);

  const title = useMemo(
    () => (creator ? `${creator.name} • dubUlar` : "Creator • dubUlar"),
    [creator]
  );

  if (!creator) {
    return (
      <div className="px-4 py-10 text-neutral-400">Loading creator…</div>
    );
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${creator.name} on dubUlar`} />
      </Head>

      {/* Banner */}
      <section className="creator-banner relative">
        {/* Prefer next/image for local files; fallback if missing */}
        <Image
          src={creator.banner || "/placeholder.svg"}
          alt={`${creator.name} banner`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
        {/* Avatar + name row */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-6 flex items-end gap-4">
          <div className="rounded-full p-[3px] bg-white/10 ring-1 ring-white/20">
            <Image
              src={creator.avatar || "/placeholder.svg"}
              alt={`${creator.name} avatar`}
              width={88}
              height={88}
              className="rounded-full object-cover creator-avatar"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{creator.name}</h1>
            <div className="mt-1 text-sm text-neutral-300">
              {Intl.NumberFormat().format(creator.followers)} followers
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
              Follow
            </button>
            <button className="px-4 py-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition">
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Bio + links */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-neutral-300">{creator.bio}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {creator.links?.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-1 rounded-full bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/25 text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* Uploads grid */}
      <section className="max-w-6xl mx-auto px-4 pb-28">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Uploads</h2>
          {/* optional “See all” for creator uploads */}
          <Link href={`/creator/${creator.slug}/videos`} className="text-cyan-400">
            See all →
          </Link>
        </div>

        <ul
          className="
            grid gap-4
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
        >
          {creator.uploads.map((v, i) => {
            const glow =
              v.live ? "glow-red" : i % 2 ? "glow-blue" : "glow-pink"; // brand glow
            return (
              <li key={v.id}>
                <div className={`thumbnail ${glow} relative`}>
                  <Link href={v.href} className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/60">
                    {/* local thumbnails via next/image, else <img> */}
                    {v.thumb?.startsWith("http") ? (
                      <img
                        src={v.thumb}
                        alt={v.title}
                        className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover rounded-xl"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <Image
                        src={v.thumb || "/placeholder.svg"}
                        alt={v.title}
                        width={1280}
                        height={720}
                        className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover rounded-xl"
                      />
                    )}
                  </Link>
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
                    <div className="text-white font-semibold drop-shadow-sm">
                      {v.title}
                    </div>
                  </div>

                  {/* Small channel avatar in corner (self-link) */}
                  <Link
                    href={`/creator/${creator.slug}`}
                    className="absolute left-2 top-2 z-10"
                    aria-label={`${creator.name} page`}
                  >
                    <div className="rounded-full p-[2px] bg-white/10 ring-1 ring-white/20">
                      <Image
                        src={creator.avatar || "/placeholder.svg"}
                        alt={`${creator.name} avatar`}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </Link>

                  {v.live && (
                    <span className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-md bg-red-500/90 text-white shadow">
                      LIVE
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
