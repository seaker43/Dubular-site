// components/ThumbnailCard.jsx
export default function ThumbnailCard({
  src,
  title = "",
  href = "#",
}) {
  const fallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'>
        <rect width='100%' height='100%' fill='#0b1512'/>
        <defs><linearGradient id='g' x1='0' x2='1'>
          <stop stop-color='#10b981' stop-opacity='.35'/>
          <stop offset='1' stop-color='#10b981' stop-opacity='0'/>
        </linearGradient></defs>
        <rect width='100%' height='100%' fill='url(#g)'/>
      </svg>`
    );

  return (
    <a
      href={href}
      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 rounded-xl"
    >
      <div className="
        relative overflow-hidden rounded-xl bg-neutral-900/70
        aspect-[16/9]
        shadow-[0_0_0_0_rgba(16,185,129,0)]
        before:content-[''] before:absolute before:inset-[-30%] before:rounded-full
        before:bg-emerald-400/10 before:blur-2xl
        group-hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.7)]
        transition-shadow
        ring-1 ring-white/5
      ">
        <img
          src={src}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            // Hide broken icon and show a soft fallback
            e.currentTarget.src = fallback;
            e.currentTarget.style.objectFit = "cover";
          }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20" />
      </div>

      {title ? (
        <p className="mt-2 text-sm text-white/90 line-clamp-1">{title}</p>
      ) : null}
    </a>
  );
}
