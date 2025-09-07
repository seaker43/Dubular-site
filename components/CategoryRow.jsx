// components/CategoryRow.jsx
export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-100 neon-text">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((v, idx) => (
          <a
            key={idx}
            href="#"
            className="group block rounded-xl bg-slate-900/50 ring-1 ring-slate-800 hover:bg-slate-900 hover:ring-2 hover:ring-[#10b981] transition-all duration-200"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={v.img}
                alt={v.title}
                className="h-44 w-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                loading="lazy"
              />

              {v.live ? (
                <span className="absolute left-2 top-2 rounded-full bg-rose-600 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg animate-pulse-live">
                  Live
                </span>
              ) : (
                <span className="absolute left-2 top-2 rounded-full bg-emerald-600/90 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg animate-pulse-idle">
                  Ready
                </span>
              )}
            </div>

            <div className="p-3">
              <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-100">
                {v.title}
              </h3>
              <p className="mt-1 line-clamp-1 text-xs text-slate-400">
                {v.tags.join(" • ")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
