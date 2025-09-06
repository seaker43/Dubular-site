export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_18px_rgba(16,185,129,0.35)] mb-4">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <a key={idx} href="#" className="group block">
            {/* Thumbnail */}
            <div
              className={`aspect-video w-full overflow-hidden rounded-md shadow-sm ring-1 ring-white/10
                          transition duration-300 ease-out will-change-transform
                          ${it?.live ? "ring-red-500/80 animate-livePulse" : "group-hover:ring-emerald-400/80"}`}
            >
              <img
                src={it?.img || it?.thumb}
                alt=""
                className="h-full w-full object-cover
                           transition duration-300 ease-out will-change-transform
                           group-hover:scale-105 group-hover:brightness-110
                           rounded-md shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Meta */}
            <div className="mt-2">
              <div className="flex items-center gap-2">
                {it?.live && (
                  <span className="mr-1 px-2 py-0.5 text-xs font-bold text-white bg-red-600 rounded shadow-lg animate-livePulse">
                    LIVE
                  </span>
                )}
                <span className="text-lg font-semibold text-violet-300 transition-colors group-hover:text-violet-200">
                  {it?.title}
                </span>
              </div>
              <div className="text-sm text-violet-300/75">
                {(it?.tags || []).join(" • ")}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
