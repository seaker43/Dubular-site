import Image from "next/image";

export default function CategoryRow({ title, items }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative min-w-[200px] bg-neutral-900 rounded-xl shadow-md overflow-hidden hover:ring-2 hover:ring-emerald-400 transition-all"
          >
            {/* LIVE / Idle Badge */}
            {item.live ? (
              <span className="badge-live absolute top-2 left-2 z-10">
                LIVE
              </span>
            ) : (
              <span className="badge-green absolute top-2 left-2 z-10">
                ●
              </span>
            )}

            {/* Thumbnail */}
            <Image
              src={item.img}
              alt={item.title}
              width={320}
              height={180}
              className="w-full h-40 object-cover"
            />

            {/* Info */}
            <div className="p-3">
              <h3 className="text-cyan-300 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.tags.join(" • ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
