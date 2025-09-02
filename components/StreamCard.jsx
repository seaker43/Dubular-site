import Link from 'next/link';

export default function StreamCard({ slug, title, streamer, viewers, thumbnailUrl, hot }) {
  return (
    <Link href={`/stream/${slug}`} className="group block">
      <div className={`relative rounded-2xl overflow-hidden border bg-[#0a0f14]/80 border-white/5 hover:border-[var(--dubular-cyan-500)]/30 transition ${hot ? 'shadow-[0_0_40px_rgba(255,80,0,0.25)]' : 'shadow-[0_0_30px_rgba(0,255,255,0.09)]'}`}>
        <img src={thumbnailUrl} alt={title} className="w-full aspect-video object-cover opacity-95 group-hover:opacity-100" />
        {hot && <div className="absolute inset-0 pointer-events-none ring-2 ring-orange-500/60 rounded-2xl" />}
        <div className="p-3 flex items-center justify-between">
          <div>
            <p className="text-[15px] font-medium">{title}</p>
            <p className="text-xs text-white/60">{streamer}</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10">{viewers} watching</span>
        </div>
      </div>
    </Link>
  );
}
