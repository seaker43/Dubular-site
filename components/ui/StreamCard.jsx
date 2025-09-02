import Link from "next/link";

export default function StreamCard({ href="/stream/demo", thumb, title, live=false }) {
  return (
    <div className="card">
      <Link href={href} className="card-link" aria-label={title}>
        <img src={thumb} alt={title} className="card-img" loading="lazy" />
        {live && <span className="badge-live">LIVE</span>}
      </Link>
      <div className="card-meta">
        <div className="card-title" title={title}>{title}</div>
        <div className="card-actions">
          <Link href={href} className="pill pill-play">▶</Link>
          <Link href={`${href}#about`} className="pill pill-info">i</Link>
          <button className="pill pill-more" aria-label="More">⋯</button>
        </div>
      </div>
    </div>
  );
}
