import Image from "next/image";

export default function StreamCard({ title, thumb, badge = "LIVE" }) {
  const src = thumb || "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop";
  return (
    <div className="w-56 sm:w-64 mr-3 flex-shrink-0">
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-800/50">
        <Image src={src} alt={title} fill className="object-cover" sizes="(max-width:768px) 224px, 256px"/>
        {badge && (
          <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white font-semibold">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-2 text-sm text-slate-200 line-clamp-2">{title}</div>
    </div>
  );
}
