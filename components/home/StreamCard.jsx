import Image from "next/image";

export default function StreamCard({ title, thumb, badge = "LIVE" }) {
  const src = thumb || "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800&auto=format&fit=crop";
  return (
    <div className="w-40 sm:w-56 mr-3 flex-shrink-0">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-800">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width:768px) 160px, 224px"
        />
        {badge && (
          <span className="absolute top-1 left-1 text-[10px] px-1.5 py-0.5 rounded bg-red-600 text-white font-bold">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-slate-200 truncate">{title}</p>
    </div>
  );
}
