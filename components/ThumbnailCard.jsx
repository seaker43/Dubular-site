// components/ThumbnailCard.jsx
import Link from "next/link";

export default function ThumbnailCard({
  href = "#",
  title = "Untitled",
  subtitle = "",
  src = "/thumbs/placeholder-16x9.jpg",
  badge,
}) {
  return (
    <Link href={href} className="group block focus:outline-none">
      <div
        className={[
          "relative w-full overflow-hidden rounded-2xl",
          "bg-[#0b1311] ring-1 ring-white/5",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_40px_60px_-20px_rgba(0,0,0,0.5),inset_0_0_80px_-20px_rgba(12,255,0,0.12)]",
        ].join(" ")}
        style={{ aspectRatio: "16 / 9" }}
      >
        {/* use <img> so CF Pages doesn’t need special next/image handling */}
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        {badge && (
          <span className="absolute right-3.5 bottom-3.5 rounded-full bg-neon px-3 py-1 text-xs font-bold text-black shadow-[0_0_20px_rgba(10,235,50,0.6)]">
            {badge}
          </span>
        )}
        {/* soft neon rim */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#0AFF32]/20"></div>
      </div>

      <div className="mt-2">
        <div className="text-lg font-extrabold tracking-wide text-[#a8ffb0] drop-shadow-[0_0_14px_rgba(10,255,50,0.25)]">
          {title}
        </div>
        {subtitle && (
          <div className="text-sm text-white/65">{subtitle}</div>
        )}
      </div>
    </Link>
  );
}
