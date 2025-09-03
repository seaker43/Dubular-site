import Image from "next/image";

/**
 * Props:
 * - title: string
 * - img: string
 * - live: boolean
 * - edgeColor: CSS color token for edge light (defaults cyan)
 * - flames: boolean (when true, shows flame border instead of edge-light)
 */
export default function StreamCard({ title, img, live = false, edgeColor = "#22d3ee", flames = false }) {
  return (
    <article
      className={[
        "relative group",
        // Smaller, separated cards
        "w-[240px] sm:w-[260px] md:w-[280px] h-[150px] sm:h-[160px] md:h-[168px]",
        "rounded-xl overflow-hidden",
        "bg-[#0c1118]/90 shadow-[0_10px_30px_rgba(0,0,0,.35)]",
      ].join(" ")}
      style={{ "--edge-color": edgeColor }}
    >
      {/* Animated perimeter edge-light (disabled for flames) */}
      {!flames && <i aria-hidden className="edge-anim pointer-events-none" />}

      {/* Flame border variant for Trending */}
      {flames && <i aria-hidden className="flame-ring pointer-events-none" />}

      {/* LIVE badge */}
      {live && (
        <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-[10px] px-2 py-1 rounded shadow">
          LIVE
        </span>
      )}

      {/* Thumb */}
      <div className="relative w-full h-full">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
          className="object-cover"
          priority={false}
        />
        {/* bottom title bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-cyan-300 font-medium text-sm drop-shadow-[0_0_8px_#00e5ff]">{title}</h3>
        </div>
      </div>
    </article>
  );
}
