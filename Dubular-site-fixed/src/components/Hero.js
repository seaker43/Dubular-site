// src/components/Hero.js
export default function Hero() {
  return (
    <section className="hero">
      <div className="container center">
        <h1>AI-powered dubbing for every creator</h1>
        <p className="lead">
          Translate, clone voices, and publish multi-language videos in minutes
          — not days.
        </p>
        <div className="row gap">
          <a className="btn btnPrimary" href="#signup">
            Start free
          </a>
          <a className="btn btnGhost" href="#demo">
            Watch demo
          </a>
        </div>

        <div className="heroCard">
          <div className="row space">
            <div>
              <h3>60+ languages</h3>
              <p>Studio-grade synthesis with accents and emotion.</p>
            </div>
            <div>
              <h3>One-click captions</h3>
              <p>Burned-in or sidecar (SRT/VTT).</p>
            </div>
            <div>
              <h3>Team workflows</h3>
              <p>Review, approve, and publish together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
