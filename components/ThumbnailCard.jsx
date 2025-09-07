// components/ThumbnailCard.jsx
import Image from "next/image";

export default function ThumbnailCard({ src, title, category, live }) {
  return (
    <div className="thumbnail-card relative rounded-lg overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
      {/* Thumbnail image */}
      <Image
        src={src}
        alt={title}
        width={400}
        height={225}
        className="w-full h-auto aspect-video object-cover"
        unoptimized
      />

      {/* LIVE badge */}
      {live && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
          LIVE
        </span>
      )}

      {/* Title + category */}
      <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-black/60">
        <h3 className="text-white font-semibold truncate">{title}</h3>
        {category && <p className="text-xs text-gray-300">{category}</p>}
      </div>
    </div>
  );
}
