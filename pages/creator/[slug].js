// pages/creator/[slug].js (snippets showing CDN fields)
...
function getMockCreator(slug) {
  const name = slug.split("-").map(s => s[0].toUpperCase()+s.slice(1)).join(" ");
  return {
    name,
    slug,
    bannerUrl: "https://cdn.dubular.live/banners/default.jpg", // optional CDN banner
    logoUrl: `https://cdn.dubular.live/logos/${slug}.png`,     // CDN logo
    bio: "Independent creator streaming gaming, IRL sessions, and chill music sets.",
    followers: 48210,
    links: [{ label: "Website", href: "#" }],
    uploads: [...]
  };
}
...
<Image
  src={creator.bannerUrl || "/placeholder.svg"}
  alt={`${creator.name} banner`}
  fill
  className="object-cover"
  priority
/>
...
<Image
  src={creator.logoUrl || "/placeholder.svg"}
  alt={`${creator.name} logo`}
  width={88}
  height={88}
  className="rounded-full object-cover creator-avatar"
/>
...
<Link href={`/creator/${creator.slug}`} className="absolute left-2 top-2 z-10">
  <div className="rounded-full p-[2px] bg-white/10 ring-1 ring-white/20">
    <Image
      src={creator.logoUrl || "/placeholder.svg"}
      alt={`${creator.name} logo`}
      width={32}
      height={32}
      className="rounded-full object-cover"
/>
  </div>
</Link>
