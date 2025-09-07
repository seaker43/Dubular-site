export default function CategoryRow({ title, items }) {
  return (
    <section className="mb-8">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_26px_rgba(16,185,129,0.45)] mt-10 mb-6">
        {title}
      </h2>
      <div className="flex space-x-4 overflow-x-auto snap-x">
        {items.map((it, idx) => (
          <a key={idx} href="#" className="group snap-start w-64 flex-shrink-0">
            <div className="aspect-video w-full overflow-hidden rounded-md shadow-sm ring-1 ring-white/10 transition duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg">
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">{it.title}</span>
                {it.live ? (
                  <span className="px-2 py-0.5 text-xs font-bold text-white bg-red-600 rounded shadow-lg animate-pulse">
                    LIVE
                  </span>
                ) : (
                  <span className="px-2 py-0.5 text-xs font-bold text-emerald-400 rounded shadow-md animate-pulse">
                    ●
                  </span>
                )}
              </div>
              <div className="text-sm text-white/60">
                {(it.tags || []).join(" • ")}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
