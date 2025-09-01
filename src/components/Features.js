// src/components/Features.js
export default function Features() {
  const items = [
    { title: 'Voice cloning', desc: 'Create high-fidelity clones that stay on-brand.' },
    { title: 'Speaker detection', desc: 'Multi-speaker separation with smart timing.' },
    { title: 'Timeline editor', desc: 'Tweak lines and re-render instantly.' },
    { title: 'Delivery formats', desc: 'MP4, MOV, ProRes, WAV, SRT/VTT.' },
    { title: 'API access', desc: 'Automate at scale with secure endpoints.' },
    { title: 'Compliance', desc: 'Opt-in training and watermarking by default.' },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why teams choose Dubular</h2>
        <div className="grid">
          {items.map((f) => (
            <div className="card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
